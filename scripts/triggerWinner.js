// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

const CONTRACT_ADDRESS = '0x10bcaA70ce146Ca938BbFD26DdA1Bf127b23624F';

async function main() {
  const checkingWinner = await hre.ethers.getContractAt(
    'CheckWinner',
    CONTRACT_ADDRESS
  );

  const tx = await checkingWinner.triggerWinner(process.env.CONTRACT_ADDRESS);
  await tx.wait();

  const counterWinner = await checkingWinner.counterWinner();
  console.log('counterWinner', counterWinner);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
