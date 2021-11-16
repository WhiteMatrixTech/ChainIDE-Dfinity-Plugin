import { WelcomeTab } from './views/welcome';
import { PluginType, Plugin, PluginContext } from '@modules/extensions/types';
import chainIDE from '@modules/extensions/client/chainIdeProxyImpl';
import icon from '@assets/static/img/dfinity/dfinity.png';
import { DfinityTools } from './views/tools';
import { DfinityProvider } from './DfinityProvider';

export const pluginConfig: Plugin = {
  activate(ctx: PluginContext) {
    const deploy = chainIDE.addControl({
      componentId: 'dfinity-di',
      name: 'Deploy & Interaction',
      iconName: 'GroupObject',
      componentFunc: DfinityProvider
    });

    const tools = chainIDE.addControl({
      componentId: 'dfinity-tools',
      name: 'Tools',
      iconName: 'Toolbox',
      componentFunc: DfinityTools
    });

    const welcomePage = chainIDE.setWelcomePage({
      componentId: 'dfinity-welcome',
      componentFunc: WelcomeTab
    });

    ctx.subscriptions.push(deploy, tools, welcomePage);
  },

  deactivate(_ctx: PluginContext) {},
  store: {},
  context: {
    subscriptions: []
  },
  config: {
    pluginId: '@chainide/dfinity',
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
