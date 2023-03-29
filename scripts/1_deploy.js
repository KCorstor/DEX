async function main() {
	//Fetch contract to deploy
	const Token = await ethers.getContractFactory("Token")

	// this allows us to get all of the information from our Token contract and deploy it to the blockchain. We assign it
	// the variable so we can use it more easily. The 'getContractFactory function gets all of the associated bytecode and
	// stuff that is required with the sourcecode so that we can deploy it .


	//Deploy contract
	const token = await Token.deploy()

	// get the information that was deployed and put it into our smart contract.
	await token.deployed()
	
	//log the information that was deployed
	console.log(`Token Deployed to: ${token.address}`)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
