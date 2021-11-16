import { PanesActions, PanesContentType } from '@modules/common';
import terminalService from '@modules/editor/services/terminalService';
import { usePanesState } from '@views/workspace/workspaceDetail/workbench/hooks/usePanesState';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useCallTerminal() {
  const dispatch = useDispatch();
  const paneState = usePanesState();

  const call = useCallback(
    (
      terminalArg: string,
      projectId: string,
      isTemporary: boolean,
      imageName: string
    ) => {
      if (paneState.centerBottom?.contentType === PanesContentType.TERMINAL) {
        terminalService.handleAddTab(
          projectId,
          terminalArg,
          isTemporary,
          imageName
        );
      } else {
        if (paneState.layout.bottom === 0) {
          dispatch(
            PanesActions.updateLayout({
              ...paneState.layout,
              bottom: 300
            })
          );
        }
        dispatch(
          PanesActions.updateCenterBottomPane(PanesContentType.TERMINAL)
        );

        terminalService.handleAddTab(
          projectId,
          terminalArg,
          isTemporary,
          imageName
        );
      }
    },
    [dispatch, paneState.centerBottom?.contentType, paneState.layout]
  );

  return call;
}
