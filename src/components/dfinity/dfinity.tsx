import { WelcomeTab } from './views/welcome';
import { PluginType, Plugin, PluginContext } from '@modules/extensions/types';
import chainIDE from '@modules/extensions/client/chainIdeProxyImpl';
import icon from '@assets/static/img/ethereum/bottom-eth-logo.svg';
import { DeployAndInteractPanel } from './views/deployAndInteract';
import { dfinityState } from './reducers';
import {
  updateAllDeployedDfinityProjectEpic,
  updatePackageSourceRootsEpic
} from './epics';

export const pluginConfig: Plugin = {
  activate(ctx: PluginContext) {
    const deploy = chainIDE.addControl({
      componentId: 'dfinity-di',
      name: 'Deploy & Interaction',
      iconName: 'GroupObject',
      componentFunc: DeployAndInteractPanel
    });
    const welcomePage = chainIDE.setWelcomePage({
      componentId: 'dfinity-welcome',
      componentFunc: WelcomeTab
    });

    ctx.subscriptions.push(deploy, welcomePage);

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

    chainIDE.addModule('@chainide/dfinity', reduxModule);
  },

  deactivate(_ctx: PluginContext) {},
  store: {},
  context: {
    subscriptions: []
  },
  config: {
    pluginId: 'dfinityPlugin',
    version: '0.0.1',
    type: PluginType.view,
    active: true,
    description: {
      title: 'dfinityPlugin',
      icon,
      description: 'dfinityPlugin'
    }
  }
};
