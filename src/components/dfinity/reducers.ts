import { createReducer } from '@reduxjs/toolkit';
import { dfinityActions } from './actions';
import { dfinity } from './type';
export interface IDfinityState {
  dfinitySourceRoots: dfinity.IDeployArgs[];
  deployedDfinityProjects: dfinity.IDeployedDfinityProjects[];
}

const initialState: IDfinityState = {
  dfinitySourceRoots: [],
  deployedDfinityProjects: []
};

export const dfinityState = createReducer(initialState, (builder) => {
  builder.addCase(dfinityActions.updateDfinityFileRoots, (state, action) => {
    state.dfinitySourceRoots = [...action.payload.dfinitySourceRoots];
  });
  builder.addCase(
    dfinityActions.updateAllDeployedDfinityProject,
    (state, action) => {
      state.deployedDfinityProjects = [
        ...action.payload.deployedDfinityProjects
      ];
    }
  );
});
