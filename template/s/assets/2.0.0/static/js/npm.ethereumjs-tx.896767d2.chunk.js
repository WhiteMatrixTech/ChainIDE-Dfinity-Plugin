(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[7935],{9864:function(e,r,t){"use strict";var n=this&&this.__extends||function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=t(3774),o=t(48834),f=function(e){function r(r,t){void 0===r&&(r={}),void 0===t&&(t={});var n=e.call(this,r,t)||this;Object.defineProperty(n,"from",{enumerable:!0,configurable:!0,get:function(){return n.getSenderAddress()},set:function(e){e&&(n._from=i.toBuffer(e))}});var o=r;return o.from&&(n.from=i.toBuffer(o.from)),n}return n(r,e),r.prototype.hash=function(r){if(void 0===r&&(r=!0),r&&this._from&&""!==this._from.toString("hex")){var t=o.Buffer.concat([this._from,this._from.slice(0,12)]);this.sign(t)}return e.prototype.hash.call(this,r)},r}(t(80813).default);r.default=f},78655:function(e,r,t){"use strict";var n=t(80813);r.YW=n.default,t(9864).default},80813:function(e,r,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0});var i=t(3774),o=t(17633),f=t(48834),a=new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),u=function(){function e(e,r){if(void 0===e&&(e={}),void 0===r&&(r={}),r.common){if(r.chain||r.hardfork)throw new Error("Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!");this._common=r.common}else{var t=r.chain?r.chain:"mainnet",n=r.hardfork?r.hardfork:"petersburg";this._common=new o.default(t,n)}var a=[{name:"nonce",length:32,allowLess:!0,default:new f.Buffer([])},{name:"gasPrice",length:32,allowLess:!0,default:new f.Buffer([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new f.Buffer([])},{name:"to",allowZero:!0,length:20,default:new f.Buffer([])},{name:"value",length:32,allowLess:!0,default:new f.Buffer([])},{name:"data",alias:"input",allowZero:!0,default:new f.Buffer([])},{name:"v",allowZero:!0,default:new f.Buffer([])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new f.Buffer([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new f.Buffer([])}];i.defineProperties(this,a,e),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)}),this._validateV(this.v),this._overrideVSetterWithValidation()}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){var r;return void 0===e&&(e=!0),r=e?this.raw:this._implementsEIP155()?this.raw.slice(0,6).concat([i.toBuffer(this.getChainId()),i.stripZeros(i.toBuffer(0)),i.stripZeros(i.toBuffer(0))]):this.raw.slice(0,6),i.rlphash(r)},e.prototype.getChainId=function(){return this._common.chainId()},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=i.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if(!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._common.gteHardfork("homestead")&&1===new i.BN(this.s).cmp(a))return!1;try{var r=i.bufferToInt(this.v),t=r>=2*this.getChainId()+35&&this._common.gteHardfork("spuriousDragon");this._senderPubKey=i.ecrecover(e,r,this.r,this.s,t?this.getChainId():void 0)}catch(n){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){this.v=new f.Buffer([]),this.s=new f.Buffer([]),this.r=new f.Buffer([]);var r=this.hash(!1),t=i.ecsign(r,e);this._implementsEIP155()&&(t.v+=2*this.getChainId()+8),Object.assign(this,t)},e.prototype.getDataFee=function(){for(var e=this.raw[5],r=new i.BN(0),t=0;t<e.length;t++)0===e[t]?r.iaddn(this._common.param("gasPrices","txDataZero")):r.iaddn(this._common.param("gasPrices","txDataNonZero"));return r},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(this._common.param("gasPrices","tx"));return this._common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this._common.param("gasPrices","txCreation")),e},e.prototype.getUpfrontCost=function(){return new i.BN(this.gasLimit).imul(new i.BN(this.gasPrice)).iadd(new i.BN(this.value))},e.prototype.validate=function(e){void 0===e&&(e=!1);var r=[];return this.verifySignature()||r.push("Invalid Signature"),this.getBaseFee().cmp(new i.BN(this.gasLimit))>0&&r.push(["gas limit is too low. Need at least "+this.getBaseFee()]),!1===e?0===r.length:r.join(" ")},e.prototype.serialize=function(){return i.rlp.encode(this.raw)},e.prototype.toJSON=function(e){return void 0===e&&(e=!1),{}},e.prototype._validateV=function(e){if(void 0!==e&&0!==e.length&&this._common.gteHardfork("spuriousDragon")){var r=i.bufferToInt(e);if(27!==r&&28!==r)if(!(r===2*this.getChainId()+35||r===2*this.getChainId()+36))throw new Error("Incompatible EIP155-based V "+r+" and chain id "+this.getChainId()+". See the second parameter of the Transaction constructor to set the chain id.")}},e.prototype._isSigned=function(){return this.v.length>0&&this.r.length>0&&this.s.length>0},e.prototype._overrideVSetterWithValidation=function(){var e=this,r=Object.getOwnPropertyDescriptor(this,"v");Object.defineProperty(this,"v",n({},r,{set:function(t){void 0!==t&&e._validateV(i.toBuffer(t)),r.set(t)}}))},e.prototype._implementsEIP155=function(){var e=this._common.gteHardfork("spuriousDragon");if(!this._isSigned())return e;var r=i.bufferToInt(this.v);return(r===2*this.getChainId()+35||r===2*this.getChainId()+36)&&e},e}();r.default=u},64519:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var i=t(45778),o=t(81538),f=t(69643),a=t(62197),u=t(30997),s=t(31112);r.zeroAddress=function(){var e=u.zeros(20);return u.bufferToHex(e)},r.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},r.isZeroAddress=function(e){return r.zeroAddress()===u.addHexPrefix(e)},r.toChecksumAddress=function(e,r){e=o.stripHexPrefix(e).toLowerCase();for(var t=void 0!==r?r.toString()+"0x":"",n=s.keccak(t+e).toString("hex"),i="0x",f=0;f<e.length;f++)parseInt(n[f],16)>=8?i+=e[f].toUpperCase():i+=e[f];return i},r.isValidChecksumAddress=function(e,t){return r.isValidAddress(e)&&r.toChecksumAddress(e,t)===e},r.generateAddress=function(e,r){e=u.toBuffer(e);var t=new a(r);return t.isZero()?s.rlphash([e,null]).slice(-20):s.rlphash([e,n.from(t.toArray())]).slice(-20)},r.generateAddress2=function(e,r,t){var o=u.toBuffer(e),f=u.toBuffer(r),a=u.toBuffer(t);return i(20===o.length),i(32===f.length),s.keccak256(n.concat([n.from("ff","hex"),o,f,s.keccak256(a)])).slice(-20)},r.isPrecompiled=function(e){var r=u.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},r.isValidPrivate=function(e){return f.privateKeyVerify(e)},r.isValidPublic=function(e,r){return void 0===r&&(r=!1),64===e.length?f.publicKeyVerify(n.concat([n.from([4]),e])):!!r&&f.publicKeyVerify(e)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=u.toBuffer(e),r&&64!==e.length&&(e=f.publicKeyConvert(e,!1).slice(1)),i(64===e.length),s.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=u.toBuffer(e),f.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=u.toBuffer(e)).length&&(e=f.publicKeyConvert(e,!1).slice(1)),e}},30997:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var i=t(81538),o=t(62197);r.zeros=function(e){return n.allocUnsafe(e).fill(0)},r.setLengthLeft=function(e,t,n){void 0===n&&(n=!1);var i=r.zeros(t);return e=r.toBuffer(e),n?e.length<t?(e.copy(i),i):e.slice(0,t):e.length<t?(e.copy(i,t-e.length),i):e.slice(-t)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,t){return r.setLength(e,t,!0)},r.unpad=function(e){for(var r=(e=i.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},r.stripZeros=r.unpad,r.toBuffer=function(e){if(!n.isBuffer(e))if(Array.isArray(e))e=n.from(e);else if("string"===typeof e){if(!i.isHexString(e))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+e);e=n.from(i.padToEven(i.stripHexPrefix(e)),"hex")}else if("number"===typeof e)e=i.intToBuffer(e);else if(null===e||void 0===e)e=n.allocUnsafe(0);else if(o.isBN(e))e=e.toArrayLike(n);else{if(!e.toArray)throw new Error("invalid type");e=n.from(e.toArray())}return e},r.bufferToInt=function(e){return new o(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new o(e).fromTwos(256)},r.toUnsigned=function(e){return n.from(e.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!==typeof e||i.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(e){if(n.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var t=[],i=0;i<e.length;i++)t.push(r.baToJSON(e[i]));return t}}},20249:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var i=t(62197);r.MAX_INTEGER=new i("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new i("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=n.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=n.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=n.from(r.KECCAK256_RLP_S,"hex")},31112:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var i=t(1115),o=i.keccak224,f=i.keccak384,a=i.keccak256,u=i.keccak512,s=t(16162),c=t(81538),l=t(22478),d=t(30997);r.keccak=function(e,r){switch(void 0===r&&(r=256),e="string"!==typeof e||c.isHexString(e)?d.toBuffer(e):n.from(e,"utf8"),r||(r=256),r){case 224:return o(e);case 256:return a(e);case 384:return f(e);case 512:return u(e);default:throw new Error("Invald algorithm: keccak"+r)}},r.keccak256=function(e){return r.keccak(e)},r.sha256=function(e){return e=d.toBuffer(e),s("sha256").update(e).digest()},r.ripemd160=function(e,r){e=d.toBuffer(e);var t=s("rmd160").update(e).digest();return!0===r?d.setLength(t,32):t},r.rlphash=function(e){return r.keccak(l.encode(e))}},3774:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||r.hasOwnProperty(t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var o=t(69643);r.secp256k1=o;var f=t(81538),a=t(62197);r.BN=a;var u=t(22478);r.rlp=u,Object.assign(r,f),i(t(20249),r),i(t(64519),r),i(t(31112),r),i(t(54818),r),i(t(30997),r),i(t(48305),r)},48305:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var i=t(45778),o=t(81538),f=t(22478),a=t(30997);r.defineProperties=function(e,r,t){if(e.raw=[],e._fields=[],e.toJSON=function(r){if(void 0===r&&(r=!1),r){var t={};return e._fields.forEach((function(r){t[r]="0x"+e[r].toString("hex")})),t}return a.baToJSON(e.raw)},e.serialize=function(){return f.encode(e.raw)},r.forEach((function(r,t){function o(){return e.raw[t]}function f(o){"00"!==(o=a.toBuffer(o)).toString("hex")||r.allowZero||(o=n.allocUnsafe(0)),r.allowLess&&r.length?(o=a.stripZeros(o),i(r.length>=o.length,"The field "+r.name+" must not have more "+r.length+" bytes")):r.allowZero&&0===o.length||!r.length||i(r.length===o.length,"The field "+r.name+" must have byte length of "+r.length),e.raw[t]=o}e._fields.push(r.name),Object.defineProperty(e,r.name,{enumerable:!0,configurable:!0,get:o,set:f}),r.default&&(e[r.name]=r.default),r.alias&&Object.defineProperty(e,r.alias,{enumerable:!1,configurable:!0,set:f,get:o})})),t)if("string"===typeof t&&(t=n.from(o.stripHexPrefix(t),"hex")),n.isBuffer(t)&&(t=f.decode(t)),Array.isArray(t)){if(t.length>e._fields.length)throw new Error("wrong number of fields in data");t.forEach((function(r,t){e[e._fields[t]]=a.toBuffer(r)}))}else{if("object"!==typeof t)throw new Error("invalid data");var u=Object.keys(t);r.forEach((function(r){-1!==u.indexOf(r.name)&&(e[r.name]=t[r.name]),-1!==u.indexOf(r.alias)&&(e[r.alias]=t[r.alias])}))}}},69643:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var i=t(80101),o=t(64079),f=t(81463);r.privateKeyVerify=function(e){return 32===e.length&&i.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var t=o.privateKeyExport(e,r);return f.privateKeyExport(e,t,r)},r.privateKeyImport=function(e){if(null!==(e=f.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(e){return n.from(i.privateKeyNegate(Uint8Array.from(e)))},r.privateKeyModInverse=function(e){if(32!==e.length)throw new Error("private key length is invalid");return n.from(o.privateKeyModInverse(Uint8Array.from(e)))},r.privateKeyTweakAdd=function(e,r){return n.from(i.privateKeyTweakAdd(Uint8Array.from(e),r))},r.privateKeyTweakMul=function(e,r){return n.from(i.privateKeyTweakMul(Uint8Array.from(e),Uint8Array.from(r)))},r.publicKeyCreate=function(e,r){return n.from(i.publicKeyCreate(Uint8Array.from(e),r))},r.publicKeyConvert=function(e,r){return n.from(i.publicKeyConvert(Uint8Array.from(e),r))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&i.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(e,r,t){return n.from(i.publicKeyTweakAdd(Uint8Array.from(e),Uint8Array.from(r),t))},r.publicKeyTweakMul=function(e,r,t){return n.from(i.publicKeyTweakMul(Uint8Array.from(e),Uint8Array.from(r),t))},r.publicKeyCombine=function(e,r){var t=[];return e.forEach((function(e){t.push(Uint8Array.from(e))})),n.from(i.publicKeyCombine(t,r))},r.signatureNormalize=function(e){return n.from(i.signatureNormalize(Uint8Array.from(e)))},r.signatureExport=function(e){return n.from(i.signatureExport(Uint8Array.from(e)))},r.signatureImport=function(e){return n.from(i.signatureImport(Uint8Array.from(e)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=f.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return o.signatureImport(r)},r.sign=function(e,r,t){if(null===t)throw new TypeError("options should be an Object");var o=void 0;if(t){if(o={},null===t.data)throw new TypeError("options.data should be a Buffer");if(t.data){if(32!=t.data.length)throw new RangeError("options.data length is invalid");o.data=new Uint8Array(t.data)}if(null===t.noncefn)throw new TypeError("options.noncefn should be a Function");t.noncefn&&(o.noncefn=function(e,r,i,o,f){var a=null!=i?n.from(i):null,u=null!=o?n.from(o):null,s=n.from("");return t.noncefn&&(s=t.noncefn(n.from(e),n.from(r),a,u,f)),new Uint8Array(s)})}var f=i.ecdsaSign(Uint8Array.from(e),Uint8Array.from(r),o);return{signature:n.from(f.signature),recovery:f.recid}},r.verify=function(e,r,t){return i.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),t)},r.recover=function(e,r,t,o){return n.from(i.ecdsaRecover(Uint8Array.from(r),t,Uint8Array.from(e),o))},r.ecdh=function(e,r){return n.from(i.ecdh(Uint8Array.from(e),Uint8Array.from(r),{}))},r.ecdhUnsafe=function(e,r,t){if(33!==e.length&&65!==e.length)throw new RangeError("public key length is invalid");if(32!==r.length)throw new RangeError("private key length is invalid");return n.from(o.ecdhUnsafe(Uint8Array.from(e),Uint8Array.from(r),t))}},81463:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0});var i=n.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),o=n.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(e,r,t){void 0===t&&(t=!0);var f=n.from(t?i:o);return e.copy(f,t?8:9),r.copy(f,t?181:214),f},r.privateKeyImport=function(e){var r=e.length,t=0;if(r<t+1||48!==e[t])return null;if(r<(t+=1)+1||!(128&e[t]))return null;var n=127&e[t];if(n<1||n>2)return null;if(r<(t+=1)+n)return null;var i=e[t+n-1]|(n>1?e[t+n-2]<<8:0);return r<(t+=n)+i||r<t+3||2!==e[t]||1!==e[t+1]||1!==e[t+2]||r<(t+=3)+2||4!==e[t]||e[t+1]>32||r<t+2+e[t+1]?null:e.slice(t+2,t+2+e[t+1])},r.signatureImportLax=function(e){var r=n.alloc(32,0),t=n.alloc(32,0),i=e.length,o=0;if(48!==e[o++])return null;var f=e[o++];if(128&f&&(o+=f-128)>i)return null;if(2!==e[o++])return null;var a=e[o++];if(128&a){if(o+(f=a-128)>i)return null;for(;f>0&&0===e[o];o+=1,f-=1);for(a=0;f>0;o+=1,f-=1)a=(a<<8)+e[o]}if(a>i-o)return null;var u=o;if(o+=a,2!==e[o++])return null;var s=e[o++];if(128&s){if(o+(f=s-128)>i)return null;for(;f>0&&0===e[o];o+=1,f-=1);for(s=0;f>0;o+=1,f-=1)s=(s<<8)+e[o]}if(s>i-o)return null;var c=o;for(o+=s;a>0&&0===e[u];a-=1,u+=1);if(a>32)return null;var l=e.slice(u,u+a);for(l.copy(r,32-l.length);s>0&&0===e[c];s-=1,c+=1);if(s>32)return null;var d=e.slice(c,c+s);return d.copy(t,32-d.length),{r:r,s:t}}},64079:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0});var i=t(62197),o=new(0,t(87554).ec)("secp256k1"),f=o.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var t=new i(e);if(t.ucmp(f.n)>=0)throw new Error("couldn't export to DER format");var n=o.g.mul(t);return a(n.getX(),n.getY(),r)},r.privateKeyModInverse=function(e){var r=new i(e);if(r.ucmp(f.n)>=0||r.isZero())throw new Error("private key range is invalid");return r.invm(f.n).toArrayLike(n,"be",32)},r.signatureImport=function(e){var r=new i(e.r);r.ucmp(f.n)>=0&&(r=new i(0));var t=new i(e.s);return t.ucmp(f.n)>=0&&(t=new i(0)),n.concat([r.toArrayLike(n,"be",32),t.toArrayLike(n,"be",32)])},r.ecdhUnsafe=function(e,r,t){void 0===t&&(t=!0);var n=o.keyFromPublic(e),u=new i(r);if(u.ucmp(f.n)>=0||u.isZero())throw new Error("scalar was invalid (zero or overflow)");var s=n.pub.mul(u);return a(s.getX(),s.getY(),t)};var a=function(e,r,t){var i;return t?((i=n.alloc(33))[0]=r.isOdd()?3:2,e.toArrayLike(n,"be",32).copy(i,1)):((i=n.alloc(65))[0]=4,e.toArrayLike(n,"be",32).copy(i,1),r.toArrayLike(n,"be",32).copy(i,33)),i}},54818:function(e,r,t){"use strict";var n=t(48834).Buffer;Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var i=t(69643),o=t(62197),f=t(30997),a=t(31112);function u(e,r){return r?e-(2*r+35):e-27}function s(e){return 0===e||1===e}r.ecsign=function(e,r,t){var n=i.sign(e,r),o=n.recovery;return{r:n.signature.slice(0,32),s:n.signature.slice(32,64),v:t?o+(2*t+35):o+27}},r.ecrecover=function(e,r,t,o,a){var c=n.concat([f.setLength(t,32),f.setLength(o,32)],64),l=u(r,a);if(!s(l))throw new Error("Invalid signature v value");var d=i.recover(e,c,l);return i.publicKeyConvert(d,!1).slice(1)},r.toRpcSig=function(e,r,t,i){if(!s(u(e,i)))throw new Error("Invalid signature v value");return f.bufferToHex(n.concat([f.setLengthLeft(r,32),f.setLengthLeft(t,32),f.toBuffer(e)]))},r.fromRpcSig=function(e){var r=f.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var t=r[64];return t<27&&(t+=27),{v:t,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,t,n,i){void 0===n&&(n=!0);var f=new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),a=new o("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==t.length)return!1;if(!s(u(e,i)))return!1;var c=new o(r),l=new o(t);return!(c.isZero()||c.gt(a)||l.isZero()||l.gt(a))&&(!n||1!==l.cmp(f))},r.hashPersonalMessage=function(e){var r=n.from("\x19Ethereum Signed Message:\n"+e.length.toString(),"utf-8");return a.keccak(n.concat([r,e]))}}}]);
//# sourceMappingURL=npm.ethereumjs-tx.896767d2.chunk.js.map