import React from 'react';
import { useIntl } from 'react-intl';
import Collapse from '@modules/common/components/collapse';
import { DeployForm } from './deployForm';
import { InteractPanel } from './interact/interactPanel';
import { Scroll } from '@modules/common/components';

import style from './deployAndInteract.less';

const { Panel } = Collapse;

export const DeployAndInteractPanel = () => {
  const intl = useIntl();
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
