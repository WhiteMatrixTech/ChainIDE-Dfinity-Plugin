import React, { memo, useCallback } from 'react';
import { Stack } from 'office-ui-fabric-react/lib';
import { Button, ButtonType } from '@modules/common/components';
import { Input } from '@modules/common/components/input';
import Form, { Field } from 'rc-field-form';
import { dfinity } from '../../../type';
import styles from './interactPanel.less';
import { DFINITY_LOCAL_NETWORK } from '../../../type/const';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import { useCallTerminal } from '../../../hooks/useCallTerminal';

interface IInteractItem {
  networkAddress: string;
  fileName: string;
  canister: dfinity.ICanisterDefinition;
  canisterFunction: dfinity.ICanisterFunction;
  index: number;
}

export const InteractItem = memo((props: IInteractItem) => {
  const [form] = Form.useForm();
  const { currentProjectId = '' } = useProjectState();
  const { networkAddress, fileName, canister, canisterFunction } = props;
  const { functionName, argumentList } = canisterFunction;

  const _call = useCallTerminal();
  const onCall = useCallback(() => {
    form
      .validateFields()
      .then((data: dfinity.IInteractArgs) => {
        const argument = `${Object.values(data).join(',')}`;
        let callCommand = `dfx canister${
          fileName === DFINITY_LOCAL_NETWORK
            ? ''
            : ` --network ${networkAddress}`
        } call ${canister.canisterName} ${functionName} ${argument}`;

        console.log('callCommand', callCommand);

        callCommand = window.encodeURI(callCommand);

        _call(callCommand, currentProjectId, true, 'dfx');
      })
      .catch(() => {});
  }, [
    _call,
    canister.canisterName,
    currentProjectId,
    fileName,
    form,
    functionName,
    networkAddress
  ]);

  return (
    <Stack
      tokens={{ childrenGap: 15 }}
      styles={{
        root: {
          padding: '0 16px 18px',
          backgroundColor: '#2D2D2D',
          margin: '0 26px'
        }
      }}>
      <Form form={form} validateTrigger="onChange">
        <Stack tokens={{ childrenGap: 15 }}>
          {argumentList.map((arg) => (
            <Field
              key={arg.argumentName}
              name={arg.argumentName}
              rules={[
                {
                  required: true,
                  message: `argument ${arg.argumentName} is required`
                }
              ]}>
              {(control, meta) => {
                return (
                  <Input
                    {...control}
                    required={true}
                    underlined={true}
                    borderless={true}
                    label={arg.argumentName}
                    placeholder={arg.argumentType}
                    className={styles.treeItemCard}
                    errorMessage={meta.errors.join(',')}
                  />
                );
              }}
            </Field>
          ))}
          <Button type={ButtonType.PRIMARY} onClick={onCall}>
            Call
          </Button>
        </Stack>
      </Form>
    </Stack>
  );
});
