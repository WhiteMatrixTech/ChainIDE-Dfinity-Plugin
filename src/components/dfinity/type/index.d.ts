import { dfinityActionTypes } from '../actions';
export declare namespace dfinity {
  interface IChainCodeSourceMap {
    [absPath: string]: string;
  }

  interface IDeployArgs {
    dfinityRoot: string;
    network: string;
    argument?: string;
    cycles?: string;
  }

  interface IInteractArgs {
    methodName: string;
    argument: string;
  }

  interface IDeployedDfinityNetwork {
    deployedFilePath: string;
    deployedCanisterInfo: Array<{ canisterName: string; filePath: string }>;
    networkAddress: string;
  }

  interface IDeployedDfinityProjects {
    deployedFilePath: string;
    networkAddress: string;
    canisterList: ICanisterDefinition[];
  }

  interface ICanisterFunction {
    functionName: string;
    argumentList: Array<{
      argumentName: string;
      argumentType: string;
    }>;
  }

  interface ICanisterDefinition {
    networkAddress?: string;
    deployedFilePath?: string;
    canisterName: string;
    canisterFunctions: ICanisterFunction[];
  }

  namespace actions {
    interface UpdateDfinityRoots {
      type: typeof dfinityActionTypes.UPDATE_DFINITY_ROOTS;
      payload: { dfinitySourceRoots: string[] };
    }
  }
}
