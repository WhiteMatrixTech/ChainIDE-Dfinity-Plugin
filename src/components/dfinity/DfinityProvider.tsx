import React, { createContext } from 'react';
import { useFileToDfinityState } from './hooks/useFileToDfinityState';
import { dfinity } from './type';
import { DeployAndInteractPanel } from './views/deployAndInteract/deployAndInteract';

export interface IDfinityState {
  dfinitySourceRoots: dfinity.IDfxJson[];
  deployedDfinityProjects: dfinity.IDeployedDfinityProjects[];
}

const initialState: IDfinityState = {
  dfinitySourceRoots: [],
  deployedDfinityProjects: []
};

export const DfinityContext = createContext<IDfinityState>(initialState);

export const DfinityProvider = () => {
  const dfinityState = useFileToDfinityState();

  return (
    <DfinityContext.Provider value={dfinityState}>
      <DeployAndInteractPanel />
    </DfinityContext.Provider>
  );
};
