import { filterPathByRegex, toUri } from '@modules/common/utils/fileUtils';
import fileSystemService from '@modules/filesystem/service';
import { dfinity } from './type';

export const DFINITY_LOCAL_NETWORK = 'local';
export const DFINITY_BUILDED_FILE_PATH = '.dfx';
const networkProtocol = 'http';
const deployedNetworkDir = `${DFINITY_BUILDED_FILE_PATH}/${networkProtocol}:`;

export function parseJSON(jsonString: string, defaultJson: any = {}) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return defaultJson;
  }
}

// name类似于http___18_236_241_111_8000
export function parseDfxNetwork(name: string) {
  const lastIndex = name.lastIndexOf('_');
  const tempStr = name.replace('___', '://');
  let networkAddress = `${tempStr.substring(0, lastIndex)}:${tempStr.substring(
    lastIndex + 1
  )}`;
  networkAddress = networkAddress.replaceAll('_', '.');
  const pathSplit = networkAddress.split('//');
  const filePath = `.dfx/${pathSplit[0]}/${pathSplit[1]}/canisters`;
  return { filePath, networkAddress };
}

export function parseDfxCandidToAbi(Candid: string | null) {
  if (Candid) {
    const candidStrArr = Candid.replaceAll(' ', '')
      .replaceAll('\n', '')
      .replaceAll("'", '')
      .split('_SERVICE');
    let candidStr = '';
    if (candidStrArr.length > 0) {
      candidStr = candidStrArr[1].replace(/(^{*)|(,};*$)/g, '');
    }
    const allFunctionItem = candidStr.split('>,');

    const allFunction = allFunctionItem.map((functionItem) => {
      const firstIndex = functionItem.indexOf(':');
      const functionName = functionItem.substring(0, firstIndex);
      const argumentStringList = functionItem
        .substring(firstIndex + 1, functionItem.length - functionName.length)
        .split('=>')[0]
        .replace(/(^\(*)|(\)*$)/g, '')
        .split(',');
      const argumentList: Array<{
        argumentName: string;
        argumentType: string;
      }> = [];
      argumentStringList.forEach((arg) => {
        if (arg) {
          const splitArg = arg.split(':');
          argumentList.push({
            argumentName: splitArg[0],
            argumentType: splitArg.length ? splitArg[1] : ''
          });
        }
      });
      return {
        functionName,
        argumentList
      };
    });

    return allFunction;
  }
  return [];
}

export const fetchAllDfinityRootsFromFs = (
  currentProjectId: string,
  indexes: string[]
): Promise<dfinity.IDeployArgs[]> => {
  return new Promise((resolve) => {
    resolve(
      Promise.all(
        filterPathByRegex(indexes, '/*dfx.json$').map(async (path: string) => {
          const newPath = path.replace('dfx.json', '');
          const content = await fileSystemService
            .readFileString(toUri(currentProjectId, path))
            .catch((e) => {
              throw e;
            });
          const dfxJson = parseJSON(content as string);

          let localNetworkAddress = '';
          if (dfxJson.networks) {
            Object.entries(dfxJson.networks).forEach(([name, info]) => {
              if (name === DFINITY_LOCAL_NETWORK && info.bind) {
                localNetworkAddress = info.bind.includes('http')
                  ? info.bind
                  : `http://${info.bind}`;
              }
            });
          }

          if (newPath) {
            return {
              dfinityRoot: `root/${newPath}`,
              network: localNetworkAddress
            };
          }
          return { dfinityRoot: 'root/', network: localNetworkAddress };
        })
      )
    );
  });
};

export const findPackageJsonFromFs = (
  currentProjectId: string,
  indexPath: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fileSystemService
      .getAllPathByRegex(currentProjectId, `/*package.json$`)
      .then((filePathList: string[]) => {
        filePathList.map((path: string) => {
          const newPath = path.replace('package.json', '');
          if (indexPath === newPath) {
            resolve(true);
          }
        });
        resolve(false);
      })
      .catch(reject);
  });
};

export const fetchAllDeployedDfinityProject = (
  currentProjectId: string
): Promise<dfinity.IDeployedDfinityProjects[]> => {
  return new Promise((resolve, reject) => {
    fileSystemService
      .readSurfaceDirectory(toUri(currentProjectId, deployedNetworkDir))
      .then((allDeployedHttpNetwork: string[] | null) => {
        if (allDeployedHttpNetwork) {
          resolve(
            Promise.all(
              allDeployedHttpNetwork.map(async (networkName) => {
                const networkAddress = `${networkProtocol}://${networkName}`;
                const canisterDir = `${deployedNetworkDir}/${networkName}/canisters`;
                // eslint-disable-next-line promise/no-nesting
                let deployedCanisterPath = await fileSystemService
                  .readSurfaceDirectory(toUri(currentProjectId, canisterDir))
                  .catch((e) => {
                    throw e;
                  });
                deployedCanisterPath = deployedCanisterPath
                  ? deployedCanisterPath.filter(
                      (name) => name !== 'idl' && !name.includes('assets')
                    )
                  : [];
                const canisterList = await Promise.all(
                  deployedCanisterPath.map(async (canister) => {
                    const filePath = `${canisterDir}/${canister}/${canister}.did.d.ts`;
                    // eslint-disable-next-line promise/no-nesting
                    const Candid: string | null = await fileSystemService
                      .readFileString(toUri(currentProjectId, filePath))
                      .catch((e) => {
                        throw e;
                      });
                    const dfxAbi = parseDfxCandidToAbi(Candid);
                    return {
                      canisterName: canister,
                      canisterFunctions: dfxAbi
                    };
                  })
                );

                return {
                  deployedFilePath: `${deployedNetworkDir}/${networkName}`,
                  networkAddress,
                  canisterList
                };
              })
            )
          );
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });
};

export const _back_fetchAllDeployedDfinityProject = async (
  currentProjectId: string
) => {
  // dfx.json的位置
  const path = 'dfx.json';

  const content = await fileSystemService
    .readFileString(toUri(currentProjectId, path))
    .catch((e) => {
      throw e;
    });
  const dfxJson = parseJSON(content as string);

  if (!dfxJson || !dfxJson.canisters) {
    return [];
  }

  const canisterList = Object.entries(dfxJson.canisters)
    .map(([name, info]: [name: string, info: any]) => {
      return { canisterName: name, type: info.type };
    })
    .filter((canister) => canister.type !== 'assets');

  let localNetworkAddress = '';
  if (dfxJson.networks) {
    Object.entries(dfxJson.networks).forEach(
      ([name, info]: [name: string, info: any]) => {
        if (name === DFINITY_LOCAL_NETWORK && info.bind) {
          localNetworkAddress = info.bind.includes('http')
            ? info.bind
            : `http://${info.bind}`;
        }
      }
    );
  }

  const walletJsonPathList = await fileSystemService.getAllPathByRegex(
    currentProjectId,
    '/*wallets.json$'
  );
  if (walletJsonPathList.length === 0) {
    return [];
  }
  const walletContent = await fileSystemService
    .readFileString(toUri(currentProjectId, walletJsonPathList[0]))
    .catch((e) => {
      throw e;
    });

  if (!walletContent) {
    return [];
  }
  const walletJson = parseJSON(walletContent);
  return Object.entries(walletJson.identities.default).map(([name]) => {
    const deployedProject = {
      fileName: name,
      canisterList: canisterList,
      networkAddress: '',
      filePath: `.dfx/${DFINITY_LOCAL_NETWORK}/canisters`
    };
    if (name === DFINITY_LOCAL_NETWORK) {
      deployedProject.networkAddress = localNetworkAddress;
    } else {
      deployedProject.filePath = parseDfxNetwork(name).filePath;
      deployedProject.networkAddress = parseDfxNetwork(name).networkAddress;
    }
    return deployedProject;
  });
};

export const handleDeployArgs = async (
  currentProjectId: string,
  argsObg: dfinity.IDeployArgs
) => {
  const { dfinityRoot, network, argument, cycles } = argsObg;
  const dfinityProjectPath = dfinityRoot.replace('root/', '');
  const havePackageJson = await findPackageJsonFromFs(
    currentProjectId,
    dfinityProjectPath
  );

  const startNetworkCommand = '';
  const cdFileCommand = dfinityProjectPath
    ? `&arg=cd ${dfinityProjectPath}`
    : '';
  const npmInstallCommand = havePackageJson ? '&arg=npm install' : '';
  let deployCommand = 'dfx deploy';
  deployCommand = network
    ? `${deployCommand} --network ${network}`
    : deployCommand;

  deployCommand = argument
    ? `${deployCommand} --argument ${argument}`
    : deployCommand;

  deployCommand = cycles
    ? `${deployCommand} --with-cycles ${cycles}`
    : deployCommand;

  deployCommand = `${deployCommand}`;

  const deployArg = `${startNetworkCommand}${cdFileCommand}${npmInstallCommand}${deployCommand}`;
  return deployArg;
};
