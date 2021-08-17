import React, { useCallback } from 'react';
import Collapse from '@modules/common/components/collapse';
import { DeployForm } from './deployForm';
import { InteractPanel } from './interact/interactPanel';
import { Button, ButtonType, Scroll } from '@modules/common/components';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { PanesActions, PanesContentType } from '@store/actions';
import { usePanesState } from '@views/workspace/workspaceDetail/workbench/hooks/usePanesState';

import style from './deployAndInteract.less';

const { Panel } = Collapse;

export const DeployAndInteractPanel = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const paneState = usePanesState();

  const _onStartNetwork = useCallback(() => {
    const command = window.encodeURI('dfx start --host 127.0.0.1:8443');
    if (paneState.centerBottom?.contentType === PanesContentType.TERMINAL) {
      paneState.terminal?.createShell?.(command);
    } else {
      dispatch(
        PanesActions.updateLayout({
          ...paneState.layout,
          bottom: paneState.layout.bottom || 300
        })
      );
      dispatch(
        PanesActions.updateCenterBottomPane(PanesContentType.TERMINAL, {
          args: command
        })
      );
    }
  }, [
    dispatch,
    paneState.centerBottom?.contentType,
    paneState.layout,
    paneState.terminal
  ]);

  return (
    <div className={style.deployAndInteract}>
      {/* <div className={style.generalFormWrapper}>
        <Stack
          tokens={{ childrenGap: 15 }}
          styles={{ root: { padding: '0 15px 30px' } }}>
          <Button
            type={ButtonType.PRIMARY}
            text="Start Local Network"
            onClick={_onStartNetwork}
          />
        </Stack>
      </div> */}
      {/* <div className={style.collapseWrapper}> */}

      <Collapse defaultActiveKey={['Deploy', 'interact']}>
        <Panel key="Deploy" title={intl.formatMessage({ id: 'DeployButton' })}>
          <Scroll>
            <DeployForm />
          </Scroll>
        </Panel>
        <Panel key="interact" title={intl.formatMessage({ id: 'interact' })}>
          <Scroll>
            <InteractPanel />
          </Scroll>
        </Panel>
      </Collapse>
    </div>
  );
};
