import { ethers } from "hardhat";

async function main() {
  const ERC721ATest = await ethers.getContractFactory("ERC721ATest");
  const erc721ATest = await ERC721ATest.deploy();

  await erc721ATest.deployed();

  console.log(`ERC721ATest deployed to ${erc721ATest.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
