/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Create a variable to hold your NFTs

let realityShowCollection = [];


function mintNFT(contestantName, showName, season, year, status) {
    const newRealityShowNFT = {
        contestantName,
        showName,
        season,
        year,
        status
    };

    realityShowCollection.push(newRealityShowNFT);
    console.log(`Minted: "${contestantName}" from ${showName}`);
}


function listNFTs() {
    console.log("\nListing all reality show NFTs in the collection:\n");
    realityShowCollection.forEach(nft => {
        console.log(`Contestant Name: ${nft.contestantName}`);
        console.log(`Show Name: ${nft.showName}`);
        console.log(`Season: ${nft.season}`);
        console.log(`Year: ${nft.year}`);
        console.log(`Status: ${nft.status}`);
        console.log("\n");
    });
}


function getTotalSupply() {
    return realityShowCollection.length;
}



mintNFT("John Doe", "Survivor", 15, 2007, "Winner");
mintNFT("Jane Smith", "Big Brother", 10, 2009, "Runner-up");
mintNFT("Alice Johnson", "The Amazing Race", 20, 2012, "Winner");
mintNFT("Bob Brown", "MasterChef", 5, 2015, "Finalist");
mintNFT("Eve Davis", "The Voice", 3, 2013, "Semi-finalist");

mintNFT("Rahul Roy", "Bigg Boss", 1, 2007, "Winner");
mintNFT("Sushil Kumar", "Kaun Banega Crorepati", 5, 2011, "Winner");
mintNFT("Shweta Tiwari", "Bigg Boss", 4, 2010, "Winner");
mintNFT("Divya Agarwal", "MTV Splitsvilla", 10, 2017, "Winner");
mintNFT("Prince Narula", "MTV Roadies", 12, 2015, "Winner");

listNFTs();

const totalNFTs = getTotalSupply();
console.log(`Total Supply: ${totalNFTs}`);
