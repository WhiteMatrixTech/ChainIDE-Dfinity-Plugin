import { addPrefixForAction } from '@modules/extensions/utils/common';
import { createAction } from '@reduxjs/toolkit';
import { dfinity } from './type';

const actionNamespace = 'DFINITY_CHAIN';

const dfinityBasicAction = {
  UPDATE_DFINITY_ROOTS: 'UPDATE_DFINITY_ROOTS',
  CHECK_FILESYSTEM: 'CHECK_FILESYSTEM',
  UPDATE_ALL_DEPLOYED_DFINITY_PROJECT: 'UPDATE_ALL_DEPLOYED_DFINITY_PROJECT'
};

export const dfinityActionTypes = addPrefixForAction(
  dfinityBasicAction,
  actionNamespace
);

export const dfinityActions = {
  updateDfinityFileRoots: createAction<{
    dfinitySourceRoots: dfinity.IDeployArgs[];
  }>(dfinityActionTypes.UPDATE_DFINITY_ROOTS),

  checkFileSystem: createAction<{}>(dfinityActionTypes.CHECK_FILESYSTEM),

  updateAllDeployedDfinityProject: createAction<{
    deployedDfinityProjects: dfinity.IDeployedDfinityProjects[];
  }>(dfinityActionTypes.UPDATE_ALL_DEPLOYED_DFINITY_PROJECT)
};
