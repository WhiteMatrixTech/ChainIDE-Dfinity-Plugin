import React, { memo, useCallback } from 'react';
import { Stack } from 'office-ui-fabric-react/lib';
import { Button, ButtonType } from '@modules/common/components';
import { Input } from '@modules/common/components/input';
import Form, { Field } from 'rc-field-form';
import { dfinity } from '../../../type';
import { DFINITY_LOCAL_NETWORK } from '../../../utils';
import { useDispatch } from 'react-redux';
import { PanesActions, PanesContentType } from '@store/actions';
import { usePanesState } from '@views/workspace/workspaceDetail/workbench/hooks/usePanesState';
import styles from './interactPanel.less';

interface IInteractItem {
  networkAddress: string;
  fileName: string;
  canister: dfinity.ICanisterDefinition;
  canisterFunction: dfinity.ICanisterFunction;
  index: number;
}

export const InteractItem = memo((props: IInteractItem) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const paneState = usePanesState();
  const { networkAddress, fileName, canister, canisterFunction } = props;
  const { functionName, argumentList } = canisterFunction;

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

        if (paneState.centerBottom?.contentType === PanesContentType.TERMINAL) {
          paneState.terminal?.createShell?.(callCommand);
        } else {
          dispatch(
            PanesActions.updateLayout({
              ...paneState.layout,
              bottom: paneState.layout.bottom || 300
            })
          );
          dispatch(
            PanesActions.updateCenterBottomPane(PanesContentType.TERMINAL, {
              args: callCommand
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
    canister.canisterName,
    dispatch,
    fileName,
    form,
    functionName,
    networkAddress,
    paneState.centerBottom?.contentType,
    paneState.layout,
    paneState.terminal
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
