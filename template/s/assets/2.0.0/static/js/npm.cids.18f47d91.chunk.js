"use strict";(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[9432],{85373:function(e){e.exports=class{constructor(e,s,n,i){this.name=e,this.code=s,this.alphabet=i,n&&i&&(this.engine=n(i))}encode(e){return this.engine.encode(e)}decode(e){return this.engine.decode(e)}isImplemented(){return this.engine}}},70909:function(e,s,n){const{Buffer:i}=n(48834);e.exports=function(e){return{encode:e=>"string"===typeof e?i.from(e).toString("hex"):e.toString("hex"),decode(s){for(const n of s)if(e.indexOf(n)<0)throw new Error("invalid base16 character");return i.from(s,"hex")}}}},65754:function(e){function s(e,s){const n=e.byteLength,i=new Uint8Array(e),t=s.indexOf("=")===s.length-1;t&&(s=s.substring(0,s.length-1));let r=0,o=0,a="";for(let k=0;k<n;k++)for(o=o<<8|i[k],r+=8;r>=5;)a+=s[o>>>r-5&31],r-=5;if(r>0&&(a+=s[o<<5-r&31]),t)for(;a.length%8!==0;)a+="=";return a}e.exports=function(e){return{encode:n=>s("string"===typeof n?Uint8Array.from(n):n,e),decode(s){for(const n of s)if(e.indexOf(n)<0)throw new Error("invalid base32 character");return function(e,s){const n=(e=e.replace(new RegExp("=","g"),"")).length;let i=0,t=0,r=0;const o=new Uint8Array(5*n/8|0);for(let a=0;a<n;a++)t=t<<5|s.indexOf(e[a]),i+=5,i>=8&&(o[r++]=t>>>i-8&255,i-=8);return o.buffer}(s,e)}}}},12333:function(e,s,n){const{Buffer:i}=n(48834);e.exports=function(e){const s=e.indexOf("=")>-1,n=e.indexOf("-")>-1&&e.indexOf("_")>-1;return{encode(e){let t="";t="string"===typeof e?i.from(e).toString("base64"):e.toString("base64"),n&&(t=t.replace(/\+/g,"-").replace(/\//g,"_"));const r=t.indexOf("=");return r>0&&!s&&(t=t.substring(0,r)),t},decode(s){for(const n of s)if(e.indexOf(n)<0)throw new Error("invalid base64 character");return i.from(s,"base64")}}}},38757:function(e,s,n){const i=n(85373),t=n(18166),r=n(70909),o=n(65754),a=n(12333),k=[["base1","1","","1"],["base2","0",t,"01"],["base8","7",t,"01234567"],["base10","9",t,"0123456789"],["base16","f",r,"0123456789abcdef"],["base32","b",o,"abcdefghijklmnopqrstuvwxyz234567"],["base32pad","c",o,"abcdefghijklmnopqrstuvwxyz234567="],["base32hex","v",o,"0123456789abcdefghijklmnopqrstuv"],["base32hexpad","t",o,"0123456789abcdefghijklmnopqrstuv="],["base32z","h",o,"ybndrfg8ejkmcpqxot1uwisza345h769"],["base58flickr","Z",t,"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],["base58btc","z",t,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],["base64","m",a,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],["base64pad","M",a,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],["base64url","u",a,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],["base64urlpad","U",a,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]],c=k.reduce(((e,s)=>(e[s[0]]=new i(s[0],s[1],s[2],s[3]),e)),{}),b=k.reduce(((e,s)=>(e[s[1]]=c[s[0]],e)),{});e.exports={names:c,codes:b}},49629:function(e,s,n){const{Buffer:i}=n(48834),t=n(38757);(s=e.exports=o).encode=function(e,s){const n=a(e);return o(n.name,i.from(n.encode(s)))},s.decode=function(e){i.isBuffer(e)&&(e=e.toString());const s=e.substring(0,1);"string"===typeof(e=e.substring(1,e.length))&&(e=i.from(e));const n=a(s);return i.from(n.decode(e.toString()))},s.isEncoded=function(e){i.isBuffer(e)&&(e=e.toString());if("[object String]"!==Object.prototype.toString.call(e))return!1;const s=e.substring(0,1);try{return a(s).name}catch(n){return!1}},s.names=Object.freeze(Object.keys(t.names)),s.codes=Object.freeze(Object.keys(t.codes));const r=new Error("Unsupported encoding");function o(e,s){if(!s)throw new Error("requires an encoded buffer");const n=a(e),t=i.from(n.code);return function(e,s){a(e).decode(s.toString())}(n.name,s),i.concat([t,s])}function a(e){let s;if(t.names[e])s=t.names[e];else{if(!t.codes[e])throw r;s=t.codes[e]}if(!s.isImplemented())throw new Error("Base "+e+" is not implemented yet");return s}},43496:function(e,s,n){const i=n(81461),t={};for(const[r,o]of Object.entries(i))t[r.toUpperCase().replace(/-/g,"_")]=o;e.exports=Object.freeze(t)},24085:function(e,s,n){const{Buffer:i}=n(48834),t=n(28260),r=n(21320),o=n(49896),a=n(82791);(s=e.exports).addPrefix=(e,s)=>{let n;if(i.isBuffer(e))n=a.varintBufferEncode(e);else{if(!o[e])throw new Error("multicodec not recognized");n=o[e]}return i.concat([n,s])},s.rmPrefix=e=>(t.decode(e),e.slice(t.decode.bytes)),s.getCodec=e=>{const s=t.decode(e),n=r.get(s);if(void 0===n)throw new Error(`Code ${s} not found`);return n},s.getName=e=>r.get(e),s.getNumber=e=>{const s=o[e];if(void 0===s)throw new Error("Codec `"+e+"` not found");return a.varintBufferDecode(s)[0]},s.getCode=e=>t.decode(e),s.getCodeVarint=e=>{const s=o[e];if(void 0===s)throw new Error("Codec `"+e+"` not found");return s},s.getVarint=e=>t.encode(e);const k=n(43496);Object.assign(s,k),s.print=n(84914)},21320:function(e,s,n){const i=n(81461),t=new Map;for(const r in i){const e=i[r];t.set(e,r)}e.exports=Object.freeze(t)},84914:function(e,s,n){const i=n(81461),t={};for(const[r,o]of Object.entries(i))void 0===t[o]&&(t[o]=r);e.exports=Object.freeze(t)},82791:function(e,s,n){const i=n(28260),{Buffer:t}=n(48834);function r(e){return parseInt(e.toString("hex"),16)}function o(e){let s=e.toString(16);return s.length%2===1&&(s="0"+s),t.from(s,"hex")}e.exports={numberToBuffer:o,bufferToNumber:r,varintBufferEncode:function(e){return t.from(i.encode(r(e)))},varintBufferDecode:function(e){return o(i.decode(e))},varintEncode:function(e){return t.from(i.encode(e))}}},49896:function(e,s,n){const i=n(81461),t=n(82791).varintEncode,r={};for(const o in i){const e=i[o];r[o]=t(e)}e.exports=Object.freeze(r)},84301:function(e,s,n){const i=n(35542),{Buffer:t}=n(48834);var r={checkCIDComponents:function(e){if(null==e)return"null values are not valid CIDs";if(0!==e.version&&1!==e.version)return"Invalid version, must be a number equal to 1 or 0";if("string"!==typeof e.codec)return"codec must be string";if(0===e.version){if("dag-pb"!==e.codec)return"codec must be 'dag-pb' for CIDv0";if("base58btc"!==e.multibaseName)return"multibaseName must be 'base58btc' for CIDv0"}if(!t.isBuffer(e.multihash))return"multihash must be a Buffer";try{i.validate(e.multihash)}catch(s){let e=s.message;return e||(e="Multihash validation failed"),e}}};e.exports=r},4426:function(e,s,n){const{Buffer:i}=n(48834),t=n(35542),r=n(49629),o=n(24085),a=n(81461),k=n(84301),c=n(69048);class b{constructor(e,s,n,a){if(l.isCID(e)){const s=e;return this.version=s.version,this.codec=s.codec,this.multihash=i.from(s.multihash),void(this.multibaseName=s.multibaseName||(0===s.version?"base58btc":"base32"))}if("string"===typeof e){const s=r.isEncoded(e);if(s){const n=r.decode(e);this.version=parseInt(n.slice(0,1).toString("hex"),16),this.codec=o.getCodec(n.slice(1)),this.multihash=o.rmPrefix(n.slice(1)),this.multibaseName=s}else this.version=0,this.codec="dag-pb",this.multihash=t.fromB58String(e),this.multibaseName="base58btc";return b.validateCID(this),void Object.defineProperty(this,"string",{value:e})}if(i.isBuffer(e)){const s=e.slice(0,1),n=parseInt(s.toString("hex"),16);if(1===n){const s=e;this.version=n,this.codec=o.getCodec(s.slice(1)),this.multihash=o.rmPrefix(s.slice(1)),this.multibaseName="base32"}else this.version=0,this.codec="dag-pb",this.multihash=e,this.multibaseName="base58btc";b.validateCID(this)}else this.version=e,this.codec=s,this.multihash=n,this.multibaseName=a||(0===e?"base58btc":"base32"),b.validateCID(this)}get buffer(){let e=this._buffer;if(!e){if(0===this.version)e=this.multihash;else{if(1!==this.version)throw new Error("unsupported version");e=i.concat([i.from("01","hex"),o.getCodeVarint(this.codec),this.multihash])}Object.defineProperty(this,"_buffer",{value:e})}return e}get prefix(){return i.concat([i.from(`0${this.version}`,"hex"),o.getCodeVarint(this.codec),t.prefix(this.multihash)])}toV0(){if("dag-pb"!==this.codec)throw new Error("Cannot convert a non dag-pb CID to CIDv0");const{name:e,length:s}=t.decode(this.multihash);if("sha2-256"!==e)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");if(32!==s)throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");return new l(0,this.codec,this.multihash)}toV1(){return new l(1,this.codec,this.multihash)}toBaseEncodedString(e=this.multibaseName){if(this.string&&e===this.multibaseName)return this.string;let s=null;if(0===this.version){if("base58btc"!==e)throw new Error("not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()");s=t.toB58String(this.multihash)}else{if(1!==this.version)throw new Error("unsupported version");s=r.encode(e,this.buffer).toString()}return e===this.multibaseName&&Object.defineProperty(this,"string",{value:s}),s}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}toString(e){return this.toBaseEncodedString(e)}toJSON(){return{codec:this.codec,version:this.version,hash:this.multihash}}equals(e){return this.codec===e.codec&&this.version===e.version&&this.multihash.equals(e.multihash)}static validateCID(e){const s=k.checkCIDComponents(e);if(s)throw new Error(s)}}const l=c(b,{className:"CID",symbolName:"@ipld/js-cid/CID"});l.codecs=a,e.exports=l},81461:function(e){e.exports=JSON.parse('{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"blake3":30,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,"x11":4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}')}}]);
//# sourceMappingURL=npm.cids.18f47d91.chunk.js.map