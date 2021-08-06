var fs = require('fs')
const HDWalletProvider = require('truffle-hdwallet-provider');

function getSecretAndCreateWallet () {
  var [mnemonic, INFURA_PROJECT_ID] = fs.readFileSync("./secret.txt", "utf8").split("\n");
  console.log(mnemonic)
  console.log(INFURA_PROJECT_ID)
  return new HDWalletProvider(
    mnemonic,
    `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`
  )
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      provider: () => getSecretAndCreateWallet(),
      network_id: 4, // Rinkeby's id
      gas: 4500000, // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      // confirmations: 2,    // # of confs to wait between deployments. (defau>
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (mi>
      // skipDryRun: true     // Skip dry run before migrations? (default: fals>
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
