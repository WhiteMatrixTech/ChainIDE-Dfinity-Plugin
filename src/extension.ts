import { PluginConfigurations, PluginContext, PluginType } from './libs';
import * as chainIDE from 'chainIDE';
import {
  dfinityState,
  updatePackageSourceRootsEpic,
  updateAllDeployedDfinityProjectEpic,
  DeployAndInteractPanel,
  WelcomeTab
} from 'components/dfinity';

const { chainIDEProxyImpl } = chainIDE;

console.log('chainIDEProxyImpl', chainIDEProxyImpl);

export function activate(ctx: PluginContext) {
  const deploy = chainIDEProxyImpl.addControl({
    componentId: 'dfinity-di',
    name: 'Deploy & Interaction',
    iconName: 'GroupObject',
    componentFunc: DeployAndInteractPanel
  });
  const welcomePage = chainIDEProxyImpl.setWelcomePage({
    componentId: 'dfinity-welcome',
    componentFunc: WelcomeTab
  });

  const command = chainIDEProxyImpl.registerCommand({
    name: 'chainIDE-pluginId.testCommand',
    callback: () => {
      alert('test command');
    }
  });

  const registerFunc = chainIDEProxyImpl.registerFunction({
    name: 'chainIDE-pluginId.testFunction',
    function: () => {
      console.log('register function');
    }
  });

  ctx.subscriptions.push(deploy, welcomePage, command, registerFunc);

  const reduxModule = {
    reducerMap: {
      dfinityState
    },
    epics: [
      updatePackageSourceRootsEpic,
      updateAllDeployedDfinityProjectEpic
    ],
    initialActions: [],
    finalActions: []
  };

  chainIDEProxyImpl.addModule('@chainide/dfinity', reduxModule);
}

export function deactivate(_ctx: PluginContext) {
  console.log('deactivate plugin');
}

export const config: PluginConfigurations = {
  pluginId: 'dfinityPlugin',
  version: '0.0.1',
  type: PluginType.view,
  active: true,
  description: {
    title: 'dfinityPlugin',
    icon,
    description: 'dfinityPlugin'
  }
};
