import fileSystemService from '@modules/filesystem/service';
import { IFilesystemIndex } from '@modules/filesystem/service/IFileSystem';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import { useState, useEffect } from 'react';
import { dfinity } from '../type';
import {
  fetchAllDeployedCanistersOnIC,
  fetchAllDeployedDfinityProject,
  fetchAllDfinityRootsFromFs
} from '../utils';
import { useAsyncFn, useList, useDebounce } from 'react-use';
import { outputErrorHandle } from '@modules/plugin/models/errors/errorHandleFactory';
import { IDfinityState } from '../DfinityProvider';

export function useFileToDfinityState(): IDfinityState {
  const { currentProjectId = '' } = useProjectState();

  const [fileIndexes, { set: setIndexes }] = useList<string>();

  const [dfinitySourceRoots, setDfinitySourceRoots] = useState<
    dfinity.IDfxJson[]
  >([]);
  const [deployedDfinityProjects, setDeployedDfinityProjects] = useState<
    dfinity.IDeployedDfinityProjects[]
  >([]);

  const [, updateDfinitySourceRoots] = useAsyncFn(
    async (indexes: string[]) => {
      const dfinitySourceRoots = await fetchAllDfinityRootsFromFs(
        currentProjectId,
        indexes
      );
      setDfinitySourceRoots(dfinitySourceRoots);
    },
    [currentProjectId]
  );

  const [, updateDeployedDfinityProjects] = useAsyncFn(async () => {
    try {
      let deployedDfinityProjects = await fetchAllDeployedDfinityProject(
        currentProjectId
      );
      const deployedCanistersOnIC = await fetchAllDeployedCanistersOnIC(
        currentProjectId
      );
      deployedDfinityProjects = deployedDfinityProjects.concat(
        deployedCanistersOnIC
      );
      deployedDfinityProjects = deployedDfinityProjects.filter(
        (item) => item !== null
      );
      setDeployedDfinityProjects(deployedDfinityProjects);
    } catch (e) {
      outputErrorHandle.handleError(
        `Error while update deployed dfinity project: ${(e as Error).message}`
      );
    }
  }, [currentProjectId]);

  useDebounce(() => updateDfinitySourceRoots(fileIndexes), 1000, [fileIndexes]);
  useDebounce(updateDeployedDfinityProjects, 1000, [fileIndexes]);

  useEffect(() => {
    const _filesystemDidChangeEvent = fileSystemService.onFileIndex(
      (fileIndex: IFilesystemIndex) => {
        setIndexes(fileIndex.indexes);
      }
    );

    return () => {
      _filesystemDidChangeEvent.dispose();
    };
  }, [setIndexes]);

  return { dfinitySourceRoots, deployedDfinityProjects };
}
