import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'http://localhost:8001/v1',
  txServiceUrl: 'http://localhost:8000/api/v1',
  relayApiUrl: 'https://safe-relay.staging.gnosisdev.com/api/v1',
  safeAppsUrl: 'http://localhost:3002',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://xapi.testnet.fantom.network/lachesis',
  networkExplorerName: 'FTMScan',
  networkExplorerUrl: 'https://explorer.testnet.fantom.network',
  networkExplorerApiUrl: 'https://api-rinkeby.etherscan.io/api',
}

const local: NetworkConfig = {
  environment: {
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.LOCAL,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'Opera Testnet',
    isTestNet: true,
    nativeCoin: {
      address: '0x000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  },
}

export default local