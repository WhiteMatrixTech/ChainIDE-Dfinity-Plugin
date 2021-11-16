import { ECanisterType } from './../utils';
import { dfinityActionTypes } from '../actions';
export declare namespace dfinity {
  interface IChainCodeSourceMap {
    [absPath: string]: string;
  }

  interface IDeployArgs {
    dfinityRoot: string;
    network?: string;
    argument?: string;
    cycles?: string;
  }

  interface IDfxJson extends IDeployArgs {
    canistersList: string[];
  }

  interface IInteractArgs {
    methodName: string;
    argument: string;
  }

  interface IDfinityDfxJsonCanister {
    main?: string;
    dependencies?: string[];
    frontend?: { entrypoint: string };
    source?: string[];
    canisterName: string;
    type: ECanisterType;
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
    canisterType: ECanisterType;
    networkAddress?: string;
    deployedFilePath?: string;
    canisterName: string;
    canisterId: string;
    candidUI: string;
    canisterFunctions: ICanisterFunction[];
  }

  namespace actions {
    interface UpdateDfinityRoots {
      type: typeof dfinityActionTypes.UPDATE_DFINITY_ROOTS;
      payload: { dfinitySourceRoots: string[] };
    }
  }
}
