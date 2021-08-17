import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { useDfinityState } from '../../../selectors';
import { dfinityActionTypes } from '../../../actions';
import { dfinity } from '../../../type';
import { handleDeployArgs } from '../../../utils';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import { envConfig } from '@modules/common/const/envs';
import { PanesActions, PanesContentType } from '@store/actions';
import { usePanesState } from '@views/workspace/workspaceDetail/workbench/hooks/usePanesState';

export const DeployForm = memo(() => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const paneState = usePanesState();
  const { dfinitySourceRoots } = useDfinityState();
  const { currentProjectId = '' } = useProjectState();

  const dfinityRootOptions: IDropdownOption[] = dfinitySourceRoots.reduce(
    (acc: IDropdownOption[], args: dfinity.IDeployArgs, _idx: number) => {
      const text = args.dfinityRoot;
      const key = args.dfinityRoot;
      acc.push({ key, text });
      return acc;
    },
    []
  );

  const onValuesChange = (_: any, allValues: dfinity.IDeployArgs) => {
    const { dfinityRoot } = allValues;
    const findFile = dfinitySourceRoots.filter(
      (item) => item.dfinityRoot === dfinityRoot
    );
    // form.setFieldsValue({ network: findFile[0].network });
  };

  const _onDeploy = useCallback(() => {
    form
      .validateFields()
      .then(async (data: dfinity.IDeployArgs) => {
        let deployCommand = await handleDeployArgs(currentProjectId, data);

        console.log('deployCommand', deployCommand);

        deployCommand = window.encodeURI(deployCommand);
        if (paneState.centerBottom?.contentType === PanesContentType.TERMINAL) {
          paneState.terminal?.createShell?.(deployCommand);
        } else {
          dispatch(
            PanesActions.updateLayout({
              ...paneState.layout,
              bottom: paneState.layout.bottom || 300
            })
          );
          dispatch(
            PanesActions.updateCenterBottomPane(PanesContentType.TERMINAL, {
              args: deployCommand
            })
          );
          setTimeout(() => {
            dispatch(
              PanesActions.updateCenterBottomPane(
                PanesContentType.TERMINAL,
                null
              )
            );
          }, 1000);
        }
      })
      .catch(() => {});
  }, [
    currentProjectId,
    dispatch,
    form,
    paneState.centerBottom?.contentType,
    paneState.layout,
    paneState.terminal
  ]);

  useEffect(() => {
    dispatch({
      type: dfinityActionTypes.CHECK_FILESYSTEM
    });
  }, [dispatch]);

  useEffect(() => {
    if (dfinitySourceRoots.length > 0) {
      form.setFieldsValue({ dfinityRoot: dfinitySourceRoots[0].dfinityRoot });
      // form.setFieldsValue({ network: dfinitySourceRoots[0].network });
    }
  }, [dfinitySourceRoots, form]);

  return (
    <Form
      form={form}
      validateTrigger="onChange"
      onValuesChange={onValuesChange}>
      <Stack
        tokens={{ childrenGap: 15 }}
        styles={{ root: { padding: '0 15px 30px' } }}>
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

function getSelectValue(
  _: React.FormEvent<IComboBox>,
  newItem?: IComboBoxOption | undefined
) {
  if (newItem) {
    return newItem.key;
  }
}
