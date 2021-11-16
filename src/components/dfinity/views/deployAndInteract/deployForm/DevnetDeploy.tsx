import React, { memo, useCallback, useContext, useEffect } from 'react';
import Form, { Field } from 'rc-field-form';
import {
  Stack,
  IDropdownOption,
  IComboBoxOption,
  IComboBox
} from 'office-ui-fabric-react/lib/index';
import {
  FluentDropdown,
  Button,
  ButtonType,
  Input
} from '@modules/common/components';
import { dfinity } from '../../../type';
import { findPackageJsonFromFs, handleDeployArgs } from '../../../utils';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import { envConfig } from '@modules/common/const/envs';
import outputService from '@modules/editor/services/outputService';
import { LogSource } from '@modules/editor/services/outputService/IOutputService';
import { useCallTerminal } from '../../../hooks/useCallTerminal';
import { DfinityContext } from '../../../DfinityProvider';

export const DevnetDeploy = memo(() => {
  const [form] = Form.useForm();
  const { dfinitySourceRoots } = useContext(DfinityContext);
  const { currentProjectId = '', currentProject } = useProjectState();

  const dfinityRootOptions: IDropdownOption[] = dfinitySourceRoots.reduce(
    (acc: IDropdownOption[], args: dfinity.IDeployArgs, _idx: number) => {
      const text = args.dfinityRoot;
      const key = args.dfinityRoot;
      acc.push({ key, text });
      return acc;
    },
    []
  );

  const _call = useCallTerminal();
  const _onDeploy = useCallback(() => {
    form
      .validateFields()
      .then(async (data: dfinity.IDeployArgs) => {
        const { dfinityRoot } = data;
        const havePackageJson = await findPackageJsonFromFs(
          currentProjectId,
          dfinityRoot.replace('root/', '')
        );
        if (havePackageJson) {
          outputService.handleWarn([
            {
              source: LogSource.DEPLOY,
              msg: "please run 'npm install' to install dependency packages, then you can deploy your project."
            }
          ]);
          return;
        }

        const cargoTargetPath = currentProject
          ? `CARGO_TARGET_DIR=/root/${currentProject.name}/target `
          : '';
        let deployCommand = handleDeployArgs(data, cargoTargetPath);
        console.log('deployCommand', deployCommand);

        deployCommand = window.encodeURI(deployCommand);

        _call(deployCommand, currentProjectId, false, 'f3o');
      })
      .catch(() => {});
  }, [_call, currentProject, currentProjectId, form]);

  useEffect(() => {
    if (dfinitySourceRoots.length > 0) {
      form.setFieldsValue({ dfinityRoot: dfinitySourceRoots[0].dfinityRoot });
      // form.setFieldsValue({ network: dfinitySourceRoots[0].network });
    }
  }, [dfinitySourceRoots, form]);

  return (
    <Form form={form} validateTrigger="onChange">
      <Stack
        tokens={{ childrenGap: 15 }}
        styles={{ root: { padding: '15px 5px 0px' } }}>
        <Field
          name="dfinityRoot"
          valuePropName="selectedKey"
          getValueFromEvent={getSelectValue}
          rules={[
            {
              required: true,
              message: 'Dfinity project root is required'
            }
          ]}>
          {(control, meta) => {
            return (
              <FluentDropdown
                {...control}
                label="Dfinity Root File"
                options={dfinityRootOptions}
                errorMessage={meta.errors.join(',')}
              />
            );
          }}
        </Field>
        <Field
          name="network"
          initialValue={envConfig.dfinityTestNetworkEndpoint}>
          <Input label="Network" />
        </Field>
        <Field name="argument">
          <Input label="Argument" />
        </Field>
        <Field name="cycles" initialValue="">
          <Input label="Initial Cycles" />
        </Field>
        <Button type={ButtonType.PRIMARY} text="Deploy" onClick={_onDeploy} />
      </Stack>
    </Form>
  );
});

export function getSelectValue(
  _: React.FormEvent<IComboBox>,
  newItem?: IComboBoxOption | undefined
) {
  if (newItem) {
    return newItem.key;
  }
}
