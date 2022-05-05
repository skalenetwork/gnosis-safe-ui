# install and run
yarn install 
yarn start

# requirements
gnosis-tx-server running on localhost:8000

# Mainnet
- - /src/web3.constants/address.js (insert gnosis safe contract addresses here)
- - /src/config/networks/skale.ts (rpc and also the url for the gnosis-tx-server)
- - /src/logic/wallets/getWeb3.ts (rpc url)
- - /src/config/networks/network.d.ts (chain id)

# env
currently the default settings are using the skale testnet schain rpc and contracts
set up .env ? /src/utils/constants.ts