"use strict";(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[2526],{4451:function(n,t,e){e.d(t,{V:function(){return l}});var i,r=e(97296),a=e(95764),o=e(57994),u=e(98907),c=e(34902),s=e(44586);!function(n){n.CHANGE="change",n.CLEAR="clear"}(i||(i={}));var l=new(function(){function n(){(0,o.Z)(this,n),this._commands=void 0,this._commandChange=new c.Emitter,this.onCommandChange=this._commandChange.event,this._commands=[]}return(0,u.Z)(n,[{key:"registerCommand",value:function(n){if(n instanceof Array){var t=n.map((function(n){return(0,a.Z)({id:(0,s.Z)()},n)}));return this._commands=[].concat((0,r.Z)(this._commands),(0,r.Z)(t)),this._commandChange.fire({type:i.CHANGE,data:t}),t}var e=(0,s.Z)(),o=(0,a.Z)({id:e},n);return this._commands.push(o),this._commandChange.fire({type:i.CHANGE,data:[o]}),[o]}},{key:"remove",value:function(n){return this._commands=this._commands.filter((function(t){return t.id!==n})),this._commandChange.fire({type:i.CHANGE,data:this._commands}),this._commands}},{key:"getCommandsBy",value:function(n){return this._commands.filter((function(t){return t.name.includes(n)}))}},{key:"clear",value:function(){this._commands=[],this._commandChange.fire({type:i.CLEAR,data:this._commands})}}]),n}())},85153:function(n,t,e){e.d(t,{vo:function(){return y},MX:function(){return w},Dz:function(){return v}});var i=e(95550),r=e.n(i),a=e(85358),o=e(63804),u=e(48706),c=e(9307),s=e(76515),l=e(83112),f=e(54516),d=e(44615),h=e(29833),g=e(25720);function v(){var n=(0,l.Z)(),t=(0,d.useDispatch)(),e=(0,f.v)().walletInstData,i=(0,o.useCallback)((0,a.Z)(r().mark((function n(){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u.z$.wallet){n.next=8;break}return e={currentChainID:"",currentAccounts:[],isBrowserWalletExist:""},n.next=4,u.z$.wallet.fetchNetWork().then((function(n){e.currentChainID=n})).catch((function(n){s.Z.handleErrorSingle("Error while fetch network: ".concat(n.message))}));case 4:return n.next=6,u.z$.wallet.fetchAccount().then((function(n){e.currentAccounts=n})).catch((function(n){s.Z.handleErrorSingle("Error while fetch account: ".concat(n.message))}));case 6:t({type:h.TQ.SET_WALLET_DATA,data:e}),t({type:h.TQ.SET_WALLET_LOADING,data:!1});case 8:case"end":return n.stop()}}),n)}))),[t]);return(0,o.useEffect)((function(){var e=u.z$.onWalletChange((function(e){switch(e.type){case c.vN.Error:case c.vN.UNLOAD:t({type:h.TQ.SET_WALLET_DATA,data:{currentChainID:"",currentAccounts:[],isBrowserWalletExist:e.data.message||n.formatMessage({id:"noWallet"})}}),t({type:h.TQ.SET_WALLET_LOADING,data:!1});break;case c.vN.ON_ACCOUNT_CHANGE:case c.vN.ON_CHAIN_CHANGE:case c.vN.LOAD:i();break;case c.vN.PROVIDER_DISCONNECT:s.Z.handleWarn([{source:g.O3.ALL,msg:"network disconnect, ".concat(e.data.message)}]);break;default:i()}}));return function(){e.dispose()}}),[t,i,n,e.currentChainID]),e}var p=e(12721),m={ethereum:[{name:"Metamask",iconPath:e(51875),loadParams:{library:"MetamaskWallet",url:"https://cdn.jsdelivr.net/npm/@white-matrix/metamask-wallet-service@1.0.11"},pluginId:"MetamaskWallet"}],binance:[{name:"Metamask",iconPath:e(51875),loadParams:{library:"MetamaskWallet",url:"https://cdn.jsdelivr.net/npm/@white-matrix/metamask-wallet-service@1.0.11"},pluginId:"MetamaskWallet"},{name:"BinanceWallet",iconPath:e(56167),loadParams:{library:"BinanceWallet",url:"https://cdn.jsdelivr.net/npm/@white-matrix/binance-wallet-service@latest"},pluginId:"BinanceWallet"}]},C=["ethereum","binance"];function y(){var n=(0,p.D)();return m[n]}function w(){var n=(0,p.D)();return C.includes(n)}},48706:function(n,t,e){e.d(t,{Dz:function(){return l.Dz},z$:function(){return f}});var i=e(57994),r=e(98907),a=e(33021),o=e(34902),u=e(76515),c=e(9307),s=function(){function n(){(0,i.Z)(this,n),this._wallet=void 0,this._walletProvider=void 0,this._walletChange=new o.Emitter,this.onWalletChange=this._walletChange.event,this._wallet=null}return(0,r.Z)(n,[{key:"registerWallet",value:function(n){var t=this;this.wallet&&a.EV.deactivate(this.wallet.walletId),this._wallet=n,this._wallet.init().then((function(){n.walletProvider&&(t._walletProvider=n.walletProvider,t.watchProvider()),t._walletChange.fire({type:c.vN.LOAD,data:n})})).catch((function(e){t._walletChange.fire({type:c.vN.Error,data:e}),u.Z.handleErrorSingle('Failed to initialize wallet plugin "'.concat(n.walletId,'"'))}))}},{key:"wallet",get:function(){return this._wallet}},{key:"watchProvider",value:function(){var n=this;this._walletProvider.on("disconnect",(function(t){n._walletChange.fire({type:c.vN.PROVIDER_DISCONNECT,data:t})})),this._walletProvider.on("chainChanged",(function(){n._walletChange.fire({type:c.vN.ON_CHAIN_CHANGE})})),this._walletProvider.on("accountsChanged",(function(){n._walletChange.fire({type:c.vN.ON_ACCOUNT_CHANGE})}))}},{key:"dispose",value:function(){this._wallet=null,this._walletChange.fire({type:c.vN.UNLOAD,data:{}})}}]),n}(),l=e(85153),f=new s},9307:function(n,t,e){e.d(t,{vN:function(){return r},fy:function(){return a},my:function(){return u}});var i,r,a,o=e(16798);!function(n){n.LOAD="load",n.Error="error",n.UNLOAD="unload",n.ON_ACCOUNT_CHANGE="walletPlugin.onAccountChange",n.ON_CHAIN_CHANGE="walletPlugin.onChainChange",n.PROVIDER_DISCONNECT="PROVIDER_DISCONNECT"}(r||(r={})),function(n){n.EvmWalletPlugin="EvmWalletPlugin",n.MetamaskWallet="MetamaskWallet",n.BinanceWallet="BinanceWallet"}(a||(a={}));var u=(i={},(0,o.Z)(i,a.EvmWalletPlugin,"JavaScript VM"),(0,o.Z)(i,a.MetamaskWallet,"Metamask"),(0,o.Z)(i,a.BinanceWallet,"BinanceWallet"),i)},50872:function(n,t,e){e.d(t,{C:function(){return p},Z:function(){return C}});var i=e(95764),r=e(57994),a=e(98907),o=e(44586),u=e(87876),c=e(34902),s=new(function(){function n(){(0,r.Z)(this,n),this._functions=void 0,this._functionChange=new c.Emitter,this.onFunctionChange=this._functionChange.event,this._functions=[]}return(0,a.Z)(n,[{key:"register",value:function(n){this._functions.find((function(t){return t.name===n.name}))||this._functions.push(n)}},{key:"remove",value:function(n){this._functions=this._functions.filter((function(t){return t.name!==n}))}},{key:"getApiFunction",value:function(n){var t=this._functions.find((function(t){return t.name===n}));return t?t.function:function(){return console.error("function is not found")}}},{key:"clear",value:function(){this._functions=[]}}]),n}()),l=e(48706),f=e(25867),d=e(76979),h=e(60994),g=e(65171),v=function(){function n(){(0,r.Z)(this,n)}return(0,a.Z)(n,[{key:"addReactComponent",value:function(n,t){var e=n.componentId||(0,o.Z)();return{priority:0,active:function(){try{h.w.addComponents((0,i.Z)((0,i.Z)({},n),{},{componentId:e}))&&t&&t()}catch(r){throw new Error("load component failed: ".concat(r))}},dispose:function(){h.w.removeComponents(e)}}}},{key:"addControl",value:function(n,t){return this.addReactComponent((0,i.Z)({position:f.Mi.RIGHT},n),t)}},{key:"setWelcomePage",value:function(n,t){return this.addReactComponent((0,i.Z)({position:f.Mi.WELCOME},n),t)}},{key:"setWalletView",value:function(n,t){return this.addReactComponent((0,i.Z)({position:f.Mi.BOTTOM},n),t)}},{key:"registerCommand",value:function(n,t){var e=[];return{priority:99,active:function(){try{e=h.w.addCommand(n),t&&t()}catch(i){throw new Error("register command failed: ".concat(i))}},dispose:function(){e.length>0&&h.w.removeCommand(e)}}}},{key:"registerFunction",value:function(n,t){return{priority:100,active:function(){try{s.register(n),t&&t()}catch(e){throw new Error("register function failed: ".concat(e))}},dispose:function(){s.remove(n.name)}}}},{key:"getApiFunction",value:function(n){return s.getApiFunction(n)}},{key:"registerWallet",value:function(n){return{priority:0,active:function(){l.z$.registerWallet(n)},dispose:function(){l.z$.dispose()}}}},{key:"addModule",value:function(n,t){(0,d.W)(n,t)}},{key:"fileSystemService",get:function(){return u.Z}},{key:"currentProject",get:function(){return g.q.currentProjectPlugins}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),n}();v.instance=void 0;var p=v.getInstance(),m=new Proxy(p,{get:function(n,t){return t in n?n[t]:new Error("function is not found!")},set:function(){return console.warn("Can't modify chainIDE implement!"),!1}});window.System.set("app:chainIDE",{chainIDEProxyImpl:m}),window.System.import("chainIDE");var C=m},60994:function(n,t,e){e.d(t,{w:function(){return s}});var i=e(97296),r=e(57994),a=e(98907),o=e(4451),u=e(34902),c=function(){function n(){(0,r.Z)(this,n),this.state=void 0,this.components=void 0,this.componentEmitter=new u.Emitter,this.onComponentChange=this.componentEmitter.event,this.components=[],this.state={}}return(0,a.Z)(n,[{key:"addComponents",value:function(n){return!this.components.find((function(t){return t.componentId===n.componentId}))&&(this.components.push(n),this.componentEmitter.fire((0,i.Z)(this.components)),!0)}},{key:"removeComponents",value:function(n){this.components=this.components.filter((function(t){return t.componentId!==n})),this.componentEmitter.fire((0,i.Z)(this.components))}},{key:"getComponent",value:function(n){var t=this.components.find((function(t){return t.componentId===n}));return t?t.componentFunc():null}},{key:"addCommand",value:function(n){return o.V.registerCommand(n)}},{key:"removeCommand",value:function(n){n.map((function(n){o.V.remove(n.id)}))}},{key:"clear",value:function(){this.state={},this.components=[],o.V.clear(),this.componentEmitter.fire([])}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),n}();c.instance=void 0;var s=c.getInstance()},33021:function(n,t,e){e.d(t,{EV:function(){return i.E},qU:function(){return i.q},i:function(){return r.i}});var i=e(65171),r=e(25867)},65171:function(n,t,e){e.d(t,{E:function(){return k},q:function(){return _}});var i=e(95764),r=e(47427),a=e(95550),o=e.n(a),u=e(85358),c=e(57994),s=e(98907),l=e(50872),f=e(40768),d=e(34902),h=e(76515);function g(n){return new Promise((function(t,e){var i=n.url;window.System.import(i).then((function(n){try{t(n)}catch(i){e(i)}}))}))}var v=e(25867),p=e(33021),m=function(){function n(){(0,c.Z)(this,n),this._pluginConfigurations=new Map,this._plugins=new Map,this._extensionEmitter=new d.Emitter,this.onExtensionChange=this._extensionEmitter.event}return(0,s.Z)(n,[{key:"plugins",get:function(){return Array.from(this._plugins.values())}},{key:"loadBuildInPlugin",value:function(n){var t=n.config,e=t.pluginId,i=t.active;this.setPlugin(n),i?this.activate(e):this.deactivate(e),this._extensionEmitter.fire({type:v.i.LOAD,data:n})}},{key:"loadExternalPlugin",value:function(){var n=(0,u.Z)(o().mark((function n(t,e){var i,r,a,u,c,s=this;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.url,n.prev=1,n.next=4,g({url:i});case 4:if(r=n.sent,a=r.config,u=a.pluginId,c=a.active,!this._plugins.has(u)){n.next=8;break}throw Error("plugin is already load");case 8:r.config.libraryInfo={url:i},this.setPlugin(r),e||this._extensionEmitter.fire({type:v.i.LOAD,data:r}),setTimeout((function(){e?e.active?s.activate(u):s.deactivate(u):c?s.activate(u):s.deactivate(u)}),0),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),h.Z.handleErrorSingle("Error while load external plugin: ".concat(n.t0.message));case 17:case"end":return n.stop()}}),n,this,[[1,14]])})));return function(t,e){return n.apply(this,arguments)}}()},{key:"loadAllPlugins",value:function(){var n=(0,u.Z)(o().mark((function n(t){var e,i,a,u,c,s,l,d,g,v;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=(0,f.Hq)(t),n.prev=1,i=(0,r.Z)(e),n.prev=3,i.s();case 5:if((a=i.n()).done){n.next=13;break}return u=a.value.pluginSource,n.next=9,u;case 9:c=n.sent,this.loadBuildInPlugin(c.pluginConfig);case 11:n.next=5;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(3),i.e(n.t0);case 18:return n.prev=18,i.f(),n.finish(18);case 21:s=p.qU.currentProjectPlugins,l=0,d=Object.keys(s.pluginsConfigs);case 23:if(!(l<d.length)){n.next=32;break}if(g=d[l],!(v=s.pluginsConfigs[g]).libraryInfo){n.next=29;break}return n.next=29,this.loadExternalPlugin(v.libraryInfo,v);case 29:l++,n.next=23;break;case 32:n.next=37;break;case 34:n.prev=34,n.t1=n.catch(1),h.Z.handleErrorSingle("Error while load all plugin: ".concat(n.t1.message));case 37:case"end":return n.stop()}}),n,this,[[1,34],[3,15,18,21]])})));return function(t){return n.apply(this,arguments)}}()},{key:"destroy",value:function(){var n=this;this._plugins.forEach((function(t){n.deactivate(t.config.pluginId,!0),n.unload(t.config.pluginId,!0)})),this._extensionEmitter.fire({type:v.i.DESTROY,data:{}})}},{key:"unload",value:function(n,t){var e=this._plugins.get(n);e?(this.deactivate(n),this._plugins.delete(e.config.pluginId),this._pluginConfigurations.delete(e.config.pluginId),!t&&this._extensionEmitter.fire({type:v.i.UNLOAD,data:e})):h.Z.handleErrorSingle("Plugin NotFound")}},{key:"setPlugin",value:function(n){this._plugins.set(n.config.pluginId,(0,i.Z)((0,i.Z)({},n),{},{context:{subscriptions:[]}}))}},{key:"setConfiguration",value:function(n){this._pluginConfigurations.set(n.pluginId,n)}},{key:"configurations",get:function(){return Array.from(this._pluginConfigurations.values())}},{key:"activate",value:function(n){var t=this._plugins.get(n);t?(this.setConfiguration((0,i.Z)((0,i.Z)({},t.config),{},{active:!0})),t.activate(t.context,l.C),t.context.subscriptions.sort((function(n,t){return t.priority-n.priority})).map((function(n){return n.active()})),this._extensionEmitter.fire({type:v.i.ACTIVATE,data:t})):h.Z.handleErrorSingle("Plugin NotFound")}},{key:"deactivate",value:function(n,t){var e=this._plugins.get(n);e?(!t&&this.setConfiguration((0,i.Z)((0,i.Z)({},e.config),{},{active:!1})),e.deactivate(e.context,l.C),this.unSubscript(e),!t&&this._extensionEmitter.fire({type:v.i.DEACTIVATE,data:e})):h.Z.handleErrorSingle("Plugin NotFound")}},{key:"unSubscript",value:function(n){n.context.subscriptions.map((function(n){return n.dispose()})),n.context.subscriptions=[]}}]),n}(),C=e(64941),y=e(50361),w=e.n(y),E=function(){function n(t){var e=this;(0,c.Z)(this,n),this.currentPluginConfigurations={currentProjectId:"",pluginsConfigs:{}},t.onExtensionChange((function(n){switch(n.type){case p.i.LOAD:e.load(n.data.config);break;case p.i.UNLOAD:e.unload(n.data.config);break;case p.i.ACTIVATE:e.activate(n.data.config);break;case p.i.DEACTIVATE:e.deactivate(n.data.config);break;case p.i.DESTROY:e.destroy()}}))}return(0,s.Z)(n,[{key:"initialState",value:function(n){this.currentPluginConfigurations=w()(n)}},{key:"destroy",value:function(){this.currentPluginConfigurations={currentProjectId:"",pluginsConfigs:{}}}},{key:"load",value:function(n){this.currentPluginConfigurations.pluginsConfigs[n.pluginId]||(this.currentPluginConfigurations.pluginsConfigs[n.pluginId]=n),this.currentPluginConfigurations.currentProjectId&&(0,C.KI)(n,this.currentPluginConfigurations.currentProjectId)}},{key:"unload",value:function(n){this.currentPluginConfigurations.pluginsConfigs[n.pluginId]&&delete this.currentPluginConfigurations.pluginsConfigs[n.pluginId],this.currentPluginConfigurations.currentProjectId&&(0,C.XT)(n,this.currentPluginConfigurations.currentProjectId)}},{key:"activate",value:function(n){this.currentPluginConfigurations.pluginsConfigs[n.pluginId]=(0,i.Z)((0,i.Z)({},n),{},{active:!0}),this.currentPluginConfigurations.currentProjectId&&(0,C.KI)((0,i.Z)((0,i.Z)({},n),{},{active:!0}),this.currentPluginConfigurations.currentProjectId)}},{key:"deactivate",value:function(n){this.currentPluginConfigurations.pluginsConfigs[n.pluginId]=(0,i.Z)((0,i.Z)({},n),{},{active:!1}),this.currentPluginConfigurations.currentProjectId&&(0,C.KI)((0,i.Z)((0,i.Z)({},n),{},{active:!1}),this.currentPluginConfigurations.currentProjectId)}},{key:"currentProjectPlugins",get:function(){return this.currentPluginConfigurations}}]),n}(),k=new m,_=new E(k)},8234:function(n,t,e){var i;e.d(t,{M:function(){return i}}),function(n){n.LEFT="left",n.BOTTOM="bottom",n.RIGHT="right",n.CENTER="center",n.WELCOME="welcome"}(i||(i={}))},25867:function(n,t,e){var i,r;e.d(t,{Mi:function(){return a.M},i:function(){return r},zV:function(){return i}}),function(n){n.view="view",n.server="server"}(i||(i={})),function(n){n.LOAD="load",n.UNLOAD="unload",n.ACTIVATE="activate",n.DEACTIVATE="deactivate",n.DESTROY="destroy"}(r||(r={}));var a=e(8234)},64941:function(n,t,e){e.d(t,{XT:function(){return f},bh:function(){return r},KI:function(){return s}});Object.freeze([]);e(76979);var i=null,r=function(){return null===i&&(i=function(){var n=window;if(n.store)return n.store;throw new Error("Store has not been initialized")}()),i},a=e(95550),o=e.n(a),u=e(85358),c=e(94938);function s(n,t){return l.apply(this,arguments)}function l(){return(l=(0,u.Z)(o().mark((function n(t,e){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.ZP)("/workspace/updatePluginInfo",{method:"put",requestType:"json",data:{workspaceId:e,pluginName:t.pluginId,url:(null===(i=t.libraryInfo)||void 0===i?void 0:i.url)||"none",info:JSON.stringify(t)}});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}function f(n,t){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(o().mark((function n(t,e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.ZP)("/workspace/deletePluginInfo",{method:"delete",requestType:"json",data:{workspaceId:e,pluginName:t.pluginId}});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}},76979:function(n,t,e){e.d(t,{W:function(){return a}});var i=e(95764),r=e(64941),a=function(n,t){(0,r.bh)().addModule((0,i.Z)((0,i.Z)({},t),{},{id:n}))}},54516:function(n,t,e){e.d(t,{v:function(){return r}});var i=e(44615);function r(){return(0,i.useSelector)((function(n){return n.walletSelector}))}},51875:function(n,t,e){e.r(t),t.default=e.p+"assets/2.0.0/static/media/metamask-logo.4c30344d.svg"}}]);
//# sourceMappingURL=2526.64487340.chunk.js.map