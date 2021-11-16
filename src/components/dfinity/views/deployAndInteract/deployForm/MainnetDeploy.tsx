import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Form, { Field } from 'rc-field-form';
import {
  Stack,
  IDropdownOption,
  MessageBar,
  Link
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';
import {
  FluentDropdown,
  Button,
  ButtonType,
  Input
} from '@modules/common/components';
import { dfinity } from '../../../type';
import { findPackageJsonFromFs } from '../../../utils';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import outputService from '@modules/editor/services/outputService';
import { LogSource } from '@modules/editor/services/outputService/IOutputService';
import { getSelectValue } from './DevnetDeploy';
import { CanisterIdsConfigModal } from './CanisterIdsConfigModal';
import { useCallTerminal } from '../../../hooks/useCallTerminal';
import { DfinityContext } from '../../../DfinityProvider';

export const MainnetDeploy = memo(() => {
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
        const { dfinityRoot, argument } = data;
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
        let deployCommand = `${cargoTargetPath} dfx deploy --no-wallet --network ic${
          argument ? ` --argument ${argument}` : ''
        }`;

        console.log('deployCommand', deployCommand);
        deployCommand = window.encodeURI(deployCommand);

        _call(deployCommand, currentProjectId, false, 'f3o');
      })
      .catch(() => {});
  }, [_call, currentProject, currentProjectId, form]);

  const [configHidden, { setTrue: hide, setFalse: open }] = useBoolean(true);
  const _onOpenModal = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      open();
    },
    [open]
  );
  const _onCloseModal = useCallback(() => {
    hide();
  }, [hide]);

  const [canistersList, setCanistersList] = useState<string[]>([]);
  const _handleValuesChange = useCallback(
    (changeItem) => {
      if (changeItem.dfinityRoot !== undefined) {
        const dfinitySourceRoot = dfinitySourceRoots.find(
          (item) => item.dfinityRoot === changeItem.dfinityRoot
        );
        if (dfinitySourceRoot) {
          setCanistersList(dfinitySourceRoot.canistersList);
        }
      }
    },
    [dfinitySourceRoots]
  );

  useEffect(() => {
    if (dfinitySourceRoots.length > 0) {
      form.setFieldsValue({ dfinityRoot: dfinitySourceRoots[0].dfinityRoot });
      setCanistersList(dfinitySourceRoots[0].canistersList);
    }
  }, [dfinitySourceRoots, form]);

  return (
    <Form
      form={form}
      validateTrigger="onChange"
      onValuesChange={_handleValuesChange}>
      <Stack
        tokens={{ childrenGap: 15 }}
        styles={{ root: { padding: '15px 5px 0px' } }}>
        <MessageBar styles={{ root: { fontSize: '16px' } }}>
          Make sure you have configured the canister_ids.json before deploying
          to IC.
          <Link
            target="_blank"
            underline={true}
            onClick={_onOpenModal}
            styles={{ root: { paddingLeft: '4px' } }}>
            Config
          </Link>
        </MessageBar>
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
        <Field name="argument">
          <Input label="Argument" />
        </Field>
        <Button type={ButtonType.PRIMARY} text="Deploy" onClick={_onDeploy} />
      </Stack>
      <CanisterIdsConfigModal
        hidden={configHidden}
        close={_onCloseModal}
        canistersList={canistersList}
      />
    </Form>
  );
});
