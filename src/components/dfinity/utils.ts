import get from 'lodash/get';
import { filterPathByRegex, toUri } from '@modules/common/utils/fileUtils';
import fileSystemService from '@modules/filesystem/service';
import { dfinity } from './type';
import {
  deployedCanistersDirOnIC,
  deployedNetworkDir,
  DFINITY_ASSETS_URL_SUFFIX,
  DFINITY_BUILDED_CANISTER_IDS,
  DFINITY_BUILDED_FILE_PATH,
  DFINITY_CANISTER_CONFIG_FILE,
  DFINITY_IC_ROCKS_LINK,
  DFINITY_MAIN_NETWORK,
  DFINITY__Candid_UI_SUFFIX,
  ECanisterType,
  networkProtocol
} from './type/const';

export function parseJSON(jsonString: string, defaultJson: object = {}) {
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

export function parseDfxCandidToAbi(Candid: string | void) {
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
): Promise<dfinity.IDfxJson[]> => {
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
          const dfxJson = parseJSON(content);

          let canistersList: string[] = [];
          if (dfxJson.canisters) {
            canistersList = Object.keys(dfxJson.canisters);
          }

          if (newPath) {
            return {
              dfinityRoot: `root/${newPath}`,
              canistersList
            };
          }
          return { dfinityRoot: 'root/', canistersList };
        })
      )
    );
  });
};

export const findPackageJsonFromFs = async (
  currentProjectId: string,
  _indexPath: string
): Promise<boolean> => {
  const packagePathList = await fileSystemService
    .getAllPathByRegex(currentProjectId, `/*package.json$`)
    .catch((e) => {
      console.log('fetch package.json error', e);
    });
  if (packagePathList && packagePathList.length > 0) {
    const isInstalledPackage = await fileSystemService
      .readSurfaceDirectory(toUri(currentProjectId, 'node_modules'))
      .catch((e) => {
        console.log('fetch node_modules error', e);
      });
    if (!isInstalledPackage || isInstalledPackage?.length === 0) {
      return true;
    }
  }
  return false;
};

export const fetchAllDeployedDfinityProject = (
  currentProjectId: string
): Promise<any[]> => {
  return new Promise((resolve) => {
    fileSystemService
      .readSurfaceDirectory(toUri(currentProjectId, deployedNetworkDir))
      .then((allDeployedHttpNetwork: string[] | null) => {
        if (allDeployedHttpNetwork) {
          resolve(
            Promise.all(
              allDeployedHttpNetwork.map(async (networkName) => {
                const networkAddress = `${networkProtocol}://${networkName}`;
                const canisterDir = `${deployedNetworkDir}/${networkName}/canisters`;
                const dfxRenameNetwork = networkAddress.replace(
                  /[^a-zA-Z0-9]/g,
                  '_'
                );

                // eslint-disable-next-line promise/no-nesting
                const canisterIdsJson = await fileSystemService
                  .readFileString(
                    toUri(
                      currentProjectId,
                      `${DFINITY_BUILDED_FILE_PATH}/${dfxRenameNetwork}/${DFINITY_BUILDED_CANISTER_IDS}`
                    )
                  )
                  .catch(() => {
                    console.log(
                      `Network ${networkAddress} have no file canister_ids.json`
                    );
                  });
                // 此网络下没有canister_ids.json，直接返回
                if (!canisterIdsJson) {
                  return null;
                }
                // 此网络下找不到canister目录，直接返回
                // eslint-disable-next-line promise/no-nesting
                const isDeployCompleted = await fileSystemService
                  .readSurfaceDirectory(toUri(currentProjectId, canisterDir))
                  .catch((e) => {
                    console.log(`${canisterDir}: ${e.message}`);
                  });
                if (!isDeployCompleted || isDeployCompleted.length === 0) {
                  return null;
                }

                // eslint-disable-next-line promise/no-nesting
                const dfxJson = await fileSystemService
                  .readFileString(
                    toUri(currentProjectId, `${DFINITY_CANISTER_CONFIG_FILE}`)
                  )
                  .catch((e) => {
                    console.log(
                      `${DFINITY_CANISTER_CONFIG_FILE}: ${e.message}`
                    );
                  });

                // dfxJson、canisterIdsJson
                const dfxJsonContent = dfxJson
                  ? JSON.parse(dfxJson)
                  : { canisters: {} };
                const canisterIdsJsonContent = canisterIdsJson
                  ? JSON.parse(canisterIdsJson)
                  : {};

                // canister_ids.json中的__Candid_UI
                const candidUI = `${networkAddress}?canisterId=${get(
                  canisterIdsJsonContent,
                  `${DFINITY__Candid_UI_SUFFIX}.${dfxRenameNetwork}`,
                  ''
                )}`;

                const canisterList = await Promise.all(
                  Object.keys(canisterIdsJsonContent)
                    .filter((name) => name !== DFINITY__Candid_UI_SUFFIX)
                    .map(async (canisterName) => {
                      const canister = {
                        canisterName,
                        canisterId: get(
                          canisterIdsJsonContent,
                          `${canisterName}.${dfxRenameNetwork}`,
                          ''
                        ),
                        ...get(dfxJsonContent, `canisters.${canisterName}`, {})
                      };
                      if (canister.type === ECanisterType.ASSETS) {
                        return {
                          canisterName,
                          canisterFunctions: [],
                          canisterId: canister.canisterId,
                          canisterType: ECanisterType.ASSETS,
                          candidUI: `${networkAddress}?canisterId=${canister.canisterId}`
                        };
                      }
                      const filePath = `${canisterDir}/${canisterName}/${canisterName}.did.d.ts`;
                      // eslint-disable-next-line promise/no-nesting
                      const Candid: string | void = await fileSystemService
                        .readFileString(toUri(currentProjectId, filePath))
                        .catch((e) => {
                          console.log(`${filePath}: ${e.message}`);
                        });
                      const dfxAbi = parseDfxCandidToAbi(Candid);
                      return {
                        canisterName: canisterName,
                        canisterFunctions: dfxAbi,
                        canisterId: canister.canisterId,
                        canisterType: ECanisterType.MOTOKO,
                        candidUI: `${candidUI}&id=${canister.canisterId}`
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
      .catch(() => {
        resolve([]);
      });
  });
};

export const fetchAllDeployedCanistersOnIC = (
  currentProjectId: string
): Promise<dfinity.IDeployedDfinityProjects | null> => {
  return new Promise((resolve, reject) => {
    fileSystemService
      .readSurfaceDirectory(toUri(currentProjectId, deployedCanistersDirOnIC))
      .then(async (allDeployedCanisters: string[] | null) => {
        if (allDeployedCanisters) {
          // eslint-disable-next-line promise/no-nesting
          const dfxJson = await fileSystemService
            .readFileString(
              toUri(currentProjectId, `${DFINITY_CANISTER_CONFIG_FILE}`)
            )
            .catch((e) => {
              console.log(`${DFINITY_CANISTER_CONFIG_FILE}: ${e.message}`);
            });
          const dfxJsonContent = dfxJson
            ? JSON.parse(dfxJson)
            : { canisters: {} };

          // eslint-disable-next-line promise/no-nesting
          let canisterIdsJson = await fileSystemService
            .readFileString(
              toUri(currentProjectId, DFINITY_BUILDED_CANISTER_IDS)
            )
            .catch((e) => {
              console.log(`${DFINITY_CANISTER_CONFIG_FILE}: ${e.message}`);
            });
          canisterIdsJson = JSON.parse(canisterIdsJson as string);

          const canisterList = await Promise.all(
            allDeployedCanisters
              .filter((name) => name !== 'idl')
              .map(async (canisterName) => {
                const canister = {
                  canisterName,
                  canisterId: get(
                    canisterIdsJson,
                    `${canisterName}.${DFINITY_MAIN_NETWORK}`,
                    ''
                  ),
                  ...get(dfxJsonContent, `canisters.${canisterName}`, {})
                };
                if (canister.type === ECanisterType.ASSETS) {
                  return {
                    canisterName,
                    canisterFunctions: [],
                    canisterId: canister.canisterId,
                    canisterType: ECanisterType.ASSETS,
                    candidUI: `https://${canister.canisterId}${DFINITY_ASSETS_URL_SUFFIX}`
                  };
                }
                const filePath = `${deployedCanistersDirOnIC}/${canisterName}/${canisterName}.did.d.ts`;
                // eslint-disable-next-line promise/no-nesting
                const Candid: string | void = await fileSystemService
                  .readFileString(toUri(currentProjectId, filePath))
                  .catch((e) => {
                    console.log(`${filePath}: ${e.message}`);
                  });
                const dfxAbi = parseDfxCandidToAbi(Candid);
                return {
                  canisterName: canisterName,
                  canisterFunctions: dfxAbi,
                  canisterId: canister.canisterId,
                  canisterType: ECanisterType.MOTOKO,
                  candidUI: `${DFINITY_IC_ROCKS_LINK}/${canister.canisterId}`
                };
              })
          );
          resolve({
            deployedFilePath: deployedCanistersDirOnIC,
            networkAddress: DFINITY_MAIN_NETWORK,
            canisterList
          });
        } else {
          resolve(null);
        }
      })
      .catch(reject);
  });
};

export const generateCanisterIdsJson = async (
  canisterIds: Record<string, string>,
  currentProjectId: string
) => {
  const canisterIdsJson = {};
  Object.keys(canisterIds).forEach((name) => {
    canisterIdsJson[name] = {
      [DFINITY_MAIN_NETWORK]: canisterIds[name]
    };
  });

  await fileSystemService
    .writeFileString(
      toUri(currentProjectId, DFINITY_BUILDED_CANISTER_IDS),
      JSON.stringify(canisterIdsJson, null, 2)
    )
    .catch((err) => {
      throw err;
    });

  return true;
};

export const handleDeployArgs = (
  argsObg: dfinity.IDeployArgs,
  cargoTargetPath: string
) => {
  const { dfinityRoot, network, argument, cycles } = argsObg;
  const dfinityProjectPath = dfinityRoot.replace('root/', '');

  const cdFileCommand = dfinityProjectPath
    ? `cd ${dfinityProjectPath}&arg=`
    : '';
  let deployCommand = `${cargoTargetPath}dfx deploy`;
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

  const deployArg = `${cdFileCommand}${deployCommand}`;
  return deployArg;
};
