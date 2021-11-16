import React, { useCallback } from 'react';
import { MessageBar, Stack } from 'office-ui-fabric-react';
import { Button, ButtonType } from '@modules/common/components';
import { useCallTerminal } from '../../hooks/useCallTerminal';
import { useProjectState } from '@modules/projects/hooks/useProjectState';

export function DfinityTools() {
  const _call = useCallTerminal();
  const { currentProjectId = '' } = useProjectState();

  const _onStartNode = useCallback(() => {
    const command = 'dfx start --clean';
    _call(command, currentProjectId, false, 'f3o');
  }, [_call, currentProjectId]);

  const _onGetPrincipal = useCallback(() => {
    const command = 'dfx identity get-principal';
    _call(command, currentProjectId, true, 'f3o');
  }, [_call, currentProjectId]);

  return (
    <Stack tokens={{ childrenGap: 15 }} styles={{ root: { padding: '15px' } }}>
      <MessageBar styles={{ root: { fontSize: '16px' } }}>
        Provide some handy buttons to quickly call up Dfinity SDK
      </MessageBar>
      <Button
        type={ButtonType.PRIMARY}
        text="Get Principal"
        onClick={_onGetPrincipal}
      />
      <Button
        type={ButtonType.PRIMARY}
        text="Start Local Dfinity Node"
        onClick={_onStartNode}
      />
    </Stack>
  );
}
