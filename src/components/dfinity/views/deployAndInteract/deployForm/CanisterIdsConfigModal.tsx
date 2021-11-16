import {
  Dialog as FluentDialog,
  DialogFooter,
  DialogType,
  Stack
} from 'office-ui-fabric-react';
import React, { useCallback } from 'react';
import { Button, ButtonType } from '@modules/common/components/button';
import { Input } from '@modules/common/components/input';
import Form, { Field } from 'rc-field-form';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import { generateCanisterIdsJson } from '../../../utils';
import { useAsyncFn } from 'react-use';

const dialogContentProps = {
  type: DialogType.close,
  title: 'Config Canister Ids Json'
};

export interface ICanisterIdsConfigProps {
  hidden: boolean;
  close: () => void;
  canistersList: string[];
}

export function CanisterIdsConfigModal({
  hidden,
  close,
  canistersList
}: ICanisterIdsConfigProps) {
  const [form] = Form.useForm();
  const { currentProjectId = '' } = useProjectState();

  const _onDismiss = useCallback(() => {
    close();
  }, [close]);

  const [configResult, _onConfig] = useAsyncFn(async () => {
    const data = await form.validateFields();
    if (data) {
      const result = await generateCanisterIdsJson(data, currentProjectId);
      result && close();
      return result;
    }
  }, [close, currentProjectId, form]);

  return (
    <FluentDialog
      hidden={hidden}
      onDismiss={_onDismiss}
      minWidth={480}
      maxWidth={480}
      title={dialogContentProps.title}
      dialogContentProps={dialogContentProps}>
      <Form form={form}>
        <Stack styles={{ root: { padding: '10px 12px 30px' } }}>
          {canistersList.map((name) => (
            <Field
              key={name}
              name={name}
              rules={[
                {
                  required: true,
                  message: 'please input the canister id'
                }
              ]}>
              <Input required={true} label={name} />
            </Field>
          ))}
        </Stack>
      </Form>
      <DialogFooter>
        <Button
          text="Config"
          onClick={_onConfig}
          type={ButtonType.PRIMARY}
          loading={configResult.loading}
        />
      </DialogFooter>
    </FluentDialog>
  );
}
