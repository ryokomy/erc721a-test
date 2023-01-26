import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC721ATest", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployERC721ATest() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const ERC721ATest = await ethers.getContractFactory("ERC721ATest");
    const erc721ATest = await ERC721ATest.deploy();

    return { erc721ATest, owner, otherAccount };
  }

  describe("Gas Cost", function () {
    it("Should mint", async function () {
      const { erc721ATest, owner, otherAccount } = await loadFixture(
        deployERC721ATest
      );

      const quantity = 1000;
      const cTx = await erc721ATest.mint(quantity);
      const cReceipt = await cTx.wait();

      console.log(`quantity: ${quantity}`);
      console.log(`gasUsed: ${cReceipt.gasUsed}`);
    });
  });
});
