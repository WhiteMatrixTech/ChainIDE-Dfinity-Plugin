import React, { memo } from 'react';
import { Pivot, PivotItem, Stack } from 'office-ui-fabric-react/lib/index';
import { DevnetDeploy } from './DevnetDeploy';
import { MainnetDeploy } from './MainnetDeploy';

export const DeployForm = memo(() => {
  return (
    <Stack
      tokens={{ childrenGap: 15 }}
      styles={{ root: { padding: '0 10px 30px' } }}>
      <Pivot aria-label="Deploy Network">
        <PivotItem
          headerText="LocalNet & TestNet"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'LocalNet & TestNet'
          }}>
          <DevnetDeploy />
        </PivotItem>
        <PivotItem headerText="MainNet">
          <MainnetDeploy />
        </PivotItem>
      </Pivot>
    </Stack>
  );
});
