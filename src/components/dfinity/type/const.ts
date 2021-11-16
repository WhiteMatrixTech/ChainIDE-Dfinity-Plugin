export const DFINITY_LOCAL_NETWORK = 'local';

export const DFINITY_MAIN_NETWORK = 'ic';

export const DFINITY_BUILDED_FILE_PATH = '.dfx';

export const DFINITY_BUILDED_CANISTER_IDS = 'canister_ids.json';

export const DFINITY_CANISTER_CONFIG_FILE = 'dfx.json';

export const DFINITY__Candid_UI_SUFFIX = '__Candid_UI';

export const DFINITY_ASSETS_URL_SUFFIX = '.raw.ic0.app';

export const DFINITY_IC_ROCKS_LINK = 'https://ic.rocks/principal';

export const networkProtocol = 'http';

export const deployedNetworkDir = `${DFINITY_BUILDED_FILE_PATH}/${networkProtocol}:`;

export const deployedCanistersDirOnIC = `${DFINITY_BUILDED_FILE_PATH}/${DFINITY_MAIN_NETWORK}/canisters`;

export enum ECanisterType {
  MOTOKO = 'motoko',
  ASSETS = 'assets'
}
