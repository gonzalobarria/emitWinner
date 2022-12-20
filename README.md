# Interacting with Alchemy Contract

This project demonstrates how to interact with a another contract.

Install dependencies:

```shell
npm i -D hardhat -- yes to all
npm i dotenv
```

To deploy your contract in Goerli Testnet:

```shell
npx hardhat run scripts/deploy.js --network goerli
```

To emit the winner:

```shell
npx hardhat run scripts/triggerWinner.js --network goerli
```
