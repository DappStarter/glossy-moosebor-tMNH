require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name repeat sad unveil grace beach symptom genre'; 
let testAccounts = [
"0x3481b17bd26f6311b0f88e193b23db08607e9f134e7a8f9d59573815ac47eb9e",
"0x33ef109522147c9679d4476c8327da73cee91cbf7cbdf029cd6b1b598205c1bb",
"0x60af2b0a1f6871ece3a6b2886282af4e8b4da115c57513d5df42a139697936d1",
"0x01e53c9ae3a2a25d834a08a868f8a08134de4d391ff586a942e8ea2887695004",
"0xfec389f6f963233727cc3cfe2c0f605441fc14f4cfa98d7f82f45ed98d944273",
"0x8aecd2600423abbb0d5f643fc1c20b6c98d5bc650c2cf7769ec7d30ff205938f",
"0x83f84f3524c9e025702589b52f7fd854b63fe17ef469dd18b42e638e80f6b9d8",
"0xb784d94d562f22a8b210ca954a8f139d3b789a358b6c6cca4a3943961ff2fac7",
"0x13ed3425ef87bd35cf55c81e673eadc652cd5c10e42e0ef93ec0ff24644c074d",
"0xf6c760229167e299466923fa18787133b22fa0c332f7b2707d8b571946988b28"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


