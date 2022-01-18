async function main() {
  const Artwork = await hre.ethers.getContractFactory("Artwork");
  const artwork = await Artwork.deploy("ArtNFT","Art");
  await artwork.deployed();  


  console.log("ArtWork deployed to:", artwork.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});