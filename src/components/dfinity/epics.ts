import { outputErrorHandle } from '@modules/plugin/models/errors/errorHandleFactory';
import { FilesystemEffect, FilesystemEffectActionTypes } from '@store/actions';
import { IStateTypes } from '@store/types';
import { Epic, ofType, StateObservable } from 'redux-observable';
import { EMPTY, from, Observable, of } from 'rxjs';
import { catchError, debounceTime, mergeMap } from 'rxjs/operators';
import { dfinityActions } from './actions';
import { dfinity } from './type';
import {
  fetchAllDeployedDfinityProject,
  fetchAllDfinityRootsFromFs
} from './utils';

export const updatePackageSourceRootsEpic: Epic = (
  action$: Observable<FilesystemEffect>,
  state$: StateObservable<IStateTypes>
) =>
  action$.pipe(
    ofType(FilesystemEffectActionTypes.FILESYSTEM_INDEX_CHANGED),
    debounceTime(800),
    mergeMap(({ data }: FilesystemEffect) => {
      const { currentProjectId } = state$.value.project;
      if (!currentProjectId) {
        return EMPTY;
      }

      return from(fetchAllDfinityRootsFromFs(currentProjectId, data)).pipe(
        mergeMap((dfinitySourceRoots: dfinity.IDeployArgs[]) =>
          of(
            dfinityActions.updateDfinityFileRoots({
              dfinitySourceRoots
            })
          )
        )
      );
    })
  );

export const updateAllDeployedDfinityProjectEpic: Epic = (
  action$: Observable<FilesystemEffect>,
  state$: StateObservable<IStateTypes>
) =>
  action$.pipe(
    ofType(FilesystemEffectActionTypes.FILESYSTEM_INDEX_CHANGED),
    debounceTime(800),
    mergeMap(() => {
      const { currentProjectId } = state$.value.project;
      if (!currentProjectId) {
        return EMPTY;
      }

      return from(fetchAllDeployedDfinityProject(currentProjectId)).pipe(
        mergeMap((deployedDfinityProjects) => {
          return of(
            dfinityActions.updateAllDeployedDfinityProject({
              deployedDfinityProjects
            })
          );
        }),
        catchError((e) => {
          return outputErrorHandle.handleError(
            `Error while update deployed dfinity project: ${e.message}`
          );
        })
      );
    })
  );
