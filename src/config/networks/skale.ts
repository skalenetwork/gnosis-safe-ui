import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'
// SKALE Network
// replace the urls below to match the porting on the gnosis-tx-server
const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'http://localhost:8000/api/v1',
  txServiceUrl: 'http://localhost:8000/api/v1',
  safeAppsUrl: 'https://safe-apps.dev.gnosisdev.com',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://staging-v2.skalenodes.com/v1/purring-alfecca-meridiana',
  networkExplorerName: 'SKALE',
  networkExplorerUrl: 'https://purring-alfecca-meridiana.explorer.staging-v2.skalenodes.com/',
  networkExplorerApiUrl: 'https://purring-alfecca-meridiana.explorer.staging-v2.skalenodes.com/api',
}

const skale: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'https://safe-apps.staging.gnosisdev.com',
    },
    production: {
      ...baseConfig,
      safeAppsUrl: 'https://apps.gnosis-safe.io',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.SKALE,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'SKALE.Staging',
    isTestNet: true,
    nativeCoin: {
      address: '0x000',
      name: 'sFUEL',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_CONNECT,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default skale