"use strict";(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[2088],{33811:function(t,e,r){var a=r(4732).errors,n=r(4732).formatters,o=r(89201),i=r(85013),s=r(14151).subscriptions,c=r(46446).Hardfork,u=r(4056),l=function(t){if(!t.call||!t.name)throw new Error('When creating a method you need to provide at least the "name" and "call" property.');this.name=t.name,this.call=t.call,this.params=t.params||0,this.inputFormatter=t.inputFormatter,this.outputFormatter=t.outputFormatter,this.transformPayload=t.transformPayload,this.extraFormatters=t.extraFormatters,this.abiCoder=t.abiCoder,this.requestManager=t.requestManager,this.accounts=t.accounts,this.defaultBlock=t.defaultBlock||"latest",this.defaultAccount=t.defaultAccount||null,this.transactionBlockTimeout=t.transactionBlockTimeout||50,this.transactionConfirmationBlocks=t.transactionConfirmationBlocks||24,this.transactionPollingTimeout=t.transactionPollingTimeout||750,this.defaultCommon=t.defaultCommon,this.defaultChain=t.defaultChain,this.defaultHardfork=t.defaultHardfork,this.handleRevert=t.handleRevert};l.prototype.setRequestManager=function(t,e){this.requestManager=t,e&&(this.accounts=e)},l.prototype.createFunction=function(t,e){var r=this.buildCall();return r.call=this.call,this.setRequestManager(t||this.requestManager,e||this.accounts),r},l.prototype.attachToObject=function(t){var e=this.buildCall();e.call=this.call;var r=this.name.split(".");r.length>1?(t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=e):t[r[0]]=e},l.prototype.getCall=function(t){return"function"===typeof this.call?this.call(t):this.call},l.prototype.extractCallback=function(t){if("function"===typeof t[t.length-1])return t.pop()},l.prototype.validateArgs=function(t){if(t.length!==this.params)throw a.InvalidNumberOfParams(t.length,this.params,this.name)},l.prototype.formatInput=function(t){var e=this;return this.inputFormatter?this.inputFormatter.map((function(r,a){return r?r.call(e,t[a]):t[a]})):t},l.prototype.formatOutput=function(t){var e=this;return Array.isArray(t)?t.map((function(t){return e.outputFormatter&&t?e.outputFormatter(t):t})):this.outputFormatter&&t?this.outputFormatter(t):t},l.prototype.toPayload=function(t){var e=this.getCall(t),r=this.extractCallback(t),a=this.formatInput(t);this.validateArgs(a);var n={method:e,params:a,callback:r};return this.transformPayload&&(n=this.transformPayload(n)),n},l.prototype._confirmTransaction=function(t,e,r){var c=this,m=!1,p=!0,f=0,h=0,d=null,v=null,g=r.params[0]&&"object"===typeof r.params[0]&&r.params[0].gas?r.params[0].gas:null,y=!!r.params[0]&&"object"===typeof r.params[0]&&r.params[0].data&&r.params[0].from&&!r.params[0].to,b=y&&r.params[0].data.length>2,F=[new l({name:"getBlockByNumber",call:"eth_getBlockByNumber",params:2,inputFormatter:[n.inputBlockNumberFormatter,function(t){return!!t}],outputFormatter:n.outputBlockFormatter}),new l({name:"getTransactionReceipt",call:"eth_getTransactionReceipt",params:1,inputFormatter:[null],outputFormatter:n.outputTransactionReceiptFormatter}),new l({name:"getCode",call:"eth_getCode",params:2,inputFormatter:[n.inputAddressFormatter,n.inputDefaultBlockNumberFormatter]}),new l({name:"getTransactionByHash",call:"eth_getTransactionByHash",params:1,inputFormatter:[null],outputFormatter:n.outputTransactionFormatter}),new s({name:"subscribe",type:"eth",subscriptions:{newBlockHeaders:{subscriptionName:"newHeads",params:0,outputFormatter:n.outputBlockFormatter}}})],P={};F.forEach((t=>{t.attachToObject(P),t.requestManager=c.requestManager}));var k=function(s,l,F,k,E){if(!F)return E||(E={unsubscribe:function(){clearInterval(d)}}),(s?i.resolve(s):P.getTransactionReceipt(e)).catch((function(e){E.unsubscribe(),m=!0,o._fireError({message:"Failed to check for transaction receipt:",data:e},t.eventEmitter,t.reject)})).then((async function(e){if(!e||!e.blockHash)throw new Error("Receipt missing or blockHash null");if(c.extraFormatters&&c.extraFormatters.receiptFormatter&&(e=c.extraFormatters.receiptFormatter(e)),t.eventEmitter.listeners("confirmation").length>0){var r;if(void 0===s||0!==h){var a=await P.getBlockByNumber("latest"),n=a?a.hash:null;l?v?(r=await P.getBlockByNumber(v.number+1))&&(v=r,t.eventEmitter.emit("confirmation",h,e,n)):(r=await P.getBlockByNumber(e.blockNumber),v=r,t.eventEmitter.emit("confirmation",h,e,n)):t.eventEmitter.emit("confirmation",h,e,n)}(l&&r||!l)&&h++,p=!1,h===c.transactionConfirmationBlocks+1&&(E.unsubscribe(),t.eventEmitter.removeAllListeners())}return e})).then((async function(e){if(y&&!m){if(!e.contractAddress)return p&&(E.unsubscribe(),m=!0),void o._fireError(a.NoContractAddressFoundError(e),t.eventEmitter,t.reject,null,e);var r;try{r=await P.getCode(e.contractAddress)}catch(F){}if(!r)return;!0===e.status&&b||r.length>2?(t.eventEmitter.emit("receipt",e),c.extraFormatters&&c.extraFormatters.contractDeployFormatter?t.resolve(c.extraFormatters.contractDeployFormatter(e)):t.resolve(e),p&&t.eventEmitter.removeAllListeners()):o._fireError(a.ContractCodeNotStoredError(e),t.eventEmitter,t.reject,null,e),p&&E.unsubscribe(),m=!0}return e})).then((async function(e){if(!y&&!m){if(e.outOfGas||g&&g===e.gasUsed||!0!==e.status&&"0x1"!==e.status&&"undefined"!==typeof e.status)if(JSON.stringify(e,null,2),!1===e.status||"0x0"===e.status)try{var i=null;if(!c.handleRevert||"eth_sendTransaction"!==c.call&&"eth_sendRawTransaction"!==c.call)throw!1;var s=r.params[0];if("eth_sendRawTransaction"===c.call){var l=r.params[0],f=u.parse(l);s=n.inputTransactionFormatter({data:f.data,to:f.to,from:f.from,gas:f.gasLimit.toHexString(),gasPrice:f.gasPrice.toHexString(),value:f.value.toHexString()})}if(!(i=await c.getRevertReason(s,e.blockNumber)))throw!1;o._fireError(a.TransactionRevertInstructionError(i.reason,i.signature,e),t.eventEmitter,t.reject,null,e)}catch(h){o._fireError(a.TransactionRevertedWithoutReasonError(e),t.eventEmitter,t.reject,null,e)}else o._fireError(a.TransactionOutOfGasError(e),t.eventEmitter,t.reject,null,e);else t.eventEmitter.emit("receipt",e),t.resolve(e),p&&t.eventEmitter.removeAllListeners();p&&E.unsubscribe(),m=!0}})).catch((function(){f++,l?f-1>=c.transactionPollingTimeout&&(E.unsubscribe(),m=!0,o._fireError(a.TransactionError("Transaction was not mined within "+c.transactionPollingTimeout+" seconds, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject)):f-1>=c.transactionBlockTimeout&&(E.unsubscribe(),m=!0,o._fireError(a.TransactionError("Transaction was not mined within "+c.transactionBlockTimeout+" blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject))}));E.unsubscribe(),m=!0,o._fireError({message:"Failed to subscribe to new newBlockHeaders to confirm the transaction receipts.",data:F},t.eventEmitter,t.reject)},E=function(t){const e=()=>{d=setInterval(k.bind(null,t,!0),1e3)};this.requestManager.provider.on?P.subscribe("newBlockHeaders",(function(r,a,n){r||!a?e():k(t,!1,r,0,n)})):e()}.bind(this);P.getTransactionReceipt(e).then((function(e){e&&e.blockHash?(t.eventEmitter.listeners("confirmation").length>0&&E(e),k(e,!1)):m||E()})).catch((function(){m||E()}))};var m=function(t,e){return"number"===typeof t?e.wallet[t]:t&&"object"===typeof t&&t.address&&t.privateKey?t:e.wallet[t.toLowerCase()]};function p(t){const e=void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas;let r;if(r=void 0!==t.type?o.toHex(t.type):void 0===t.type&&e?"0x2":"0x0",void 0!==t.gasPrice&&("0x2"===r||e))throw Error("eip-1559 transactions don't support gasPrice");if(("0x1"===r||"0x0"===r)&&e)throw Error("pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");return e||t.common&&t.common.hardfork&&t.common.hardfork.toLowerCase()===c.London||t.hardfork&&t.hardfork.toLowerCase()===c.London?r="0x2":(t.accessList||t.common&&t.common.hardfork&&t.common.hardfork.toLowerCase()===c.Berlin||t.hardfork&&t.hardfork.toLowerCase()===c.Berlin)&&(r="0x1"),r}function f(t,e){return new Promise(((r,a)=>{try{var n=new l({name:"getBlockByNumber",call:"eth_getBlockByNumber",params:2,inputFormatter:[function(t){return t?o.toHex(t):"latest"},function(){return!1}]}).createFunction(t.requestManager),i=new l({name:"getGasPrice",call:"eth_gasPrice",params:0}).createFunction(t.requestManager);e.type<"0x2"&&void 0!==e.gasPrice?r({gasPrice:e.gasPrice}):Promise.all([n(),i()]).then((t=>{const[a,n]=t;if("0x2"===e.type&&a&&a.baseFeePerGas){let t,n;e.gasPrice?(t=e.gasPrice,n=e.gasPrice,delete e.gasPrice):(t=e.maxPriorityFeePerGas||"0x3B9ACA00",n=e.maxFeePerGas||o.toHex(o.toBN(a.baseFeePerGas).mul(o.toBN(2)).add(o.toBN(t)))),r({maxFeePerGas:n,maxPriorityFeePerGas:t})}else{if(e.maxPriorityFeePerGas||e.maxFeePerGas)throw Error("Network doesn't support eip-1559");r({gasPrice:n})}}))}catch(s){a(s)}}))}l.prototype.buildCall=function(){var t=this,e="eth_sendTransaction"===t.call||"eth_sendRawTransaction"===t.call,r="eth_call"===t.call,n=function(){var n=i(!e),s=t.toPayload(Array.prototype.slice.call(arguments)),c=function(i,c){var u;if(t.handleRevert&&r&&t.abiCoder&&(!i&&t.isRevertReasonString(c)?u=c.substring(10):i&&i.data&&(u=i.data.substring(10)),u)){var l=t.abiCoder.decodeParameter("string","0x"+u),m="Error(String)";return void o._fireError(a.RevertInstructionError(l,m),n.eventEmitter,n.reject,s.callback,{reason:l,signature:m})}try{c=t.formatOutput(c)}catch(p){i=p}if(c instanceof Error&&(i=c),i)return i.error&&(i=i.error),o._fireError(i,n.eventEmitter,n.reject,s.callback);s.callback&&s.callback(null,c),e?(n.eventEmitter.emit("transactionHash",c),t._confirmTransaction(n,c,s)):i||n.resolve(c)},u=function(e){var r={...s,method:"eth_sendRawTransaction",params:[e.rawTransaction]};t.requestManager.send(r,c)},l=function(t,e){var r;if(e&&e.accounts&&e.accounts.wallet&&e.accounts.wallet.length)if("eth_sendTransaction"===t.method){var a=t.params[0];if((r=m(a&&"object"===typeof a?a.from:null,e.accounts))&&r.privateKey)return delete(a=JSON.parse(JSON.stringify(a))).from,e.defaultChain&&!a.chain&&(a.chain=e.defaultChain),e.defaultHardfork&&!a.hardfork&&(a.hardfork=e.defaultHardfork),e.defaultCommon&&!a.common&&(a.common=e.defaultCommon),void e.accounts.signTransaction(a,r.privateKey).then(u).catch((function(t){if("function"===typeof n.eventEmitter.listeners&&n.eventEmitter.listeners("error").length){try{n.eventEmitter.emit("error",t)}catch(t){}n.eventEmitter.removeAllListeners(),n.eventEmitter.catch((function(){}))}n.reject(t)}))}else if("eth_sign"===t.method){var o=t.params[1];if((r=m(t.params[0],e.accounts))&&r.privateKey){var i=e.accounts.sign(o,r.privateKey);return t.callback&&t.callback(null,i.signature),void n.resolve(i.signature)}}return e.requestManager.send(t,c)};return e&&s.params[0]&&"object"===typeof s.params[0]&&"undefined"===typeof s.params[0].gasPrice&&("undefined"===typeof s.params[0].maxPriorityFeePerGas||"undefined"===typeof s.params[0].maxFeePerGas)?("undefined"===typeof s.params[0].type&&(s.params[0].type=p(s.params[0])),f(t,s.params[0]).then((r=>{void 0!==r.gasPrice?s.params[0].gasPrice=r.gasPrice:void 0!==r.maxPriorityFeePerGas&&void 0!==r.maxFeePerGas&&(s.params[0].maxPriorityFeePerGas=r.maxPriorityFeePerGas,s.params[0].maxFeePerGas=r.maxFeePerGas),e&&setTimeout((()=>{n.eventEmitter.emit("sending",s)}),0),l(s,t)}))):(e&&setTimeout((()=>{n.eventEmitter.emit("sending",s)}),0),l(s,t)),e&&setTimeout((()=>{n.eventEmitter.emit("sent",s)}),0),n.eventEmitter};return n.method=t,n.request=this.request.bind(this),n},l.prototype.getRevertReason=function(t,e){var r=this;return new Promise((function(a,n){new l({name:"call",call:"eth_call",params:2,abiCoder:r.abiCoder,handleRevert:!0}).createFunction(r.requestManager)(t,o.numberToHex(e)).then((function(){a(!1)})).catch((function(t){t.reason?a({reason:t.reason,signature:t.signature}):n(t)}))}))},l.prototype.isRevertReasonString=function(t){return"string"===typeof t&&(t.length-2)/2%32===4&&"0x08c379a0"===t.substring(0,10)},l.prototype.request=function(){var t=this.toPayload(Array.prototype.slice.call(arguments));return t.format=this.formatOutput.bind(this),t},t.exports=l}}]);
//# sourceMappingURL=npm.web3-core-method.e7e56e3c.chunk.js.map