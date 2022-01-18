import React from 'react'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import { Contract_ABI, Contract_ADDRESS } from "../contracts/Artwork";


const Minter = () => {

  const [nft, setNft] = useState()
  const [loaded, setLoaded] = useState('not-loaded')

        
      //web3.js
      // const web3 = new Web3(new Web3.providers.httpProvider("https://rinkeby.infura.io/v3/b8f6c2c8bef84ff49cf81f66ace74130"))
      // const artContract = new web3.eth.Contract(Contract_ABI, Contract_ADDRESS);


  useEffect(() => {
    const init = async () =>{

      //ether.js
      const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/b8f6c2c8bef84ff49cf81f66ace74130");
      //const signer = provider.getSigner()
      const artContract = new ethers.Contract(Contract_ADDRESS, Contract_ABI, provider)


      const tokenUri = await artContract.tokenURI(1)
      const meta = await axios.get(tokenUri)

      let item = {
        name: meta.data.properties.name,
        description: meta.data.properties.description,
        image: meta.data.properties.image,
      }

      setNft(item)
      setLoaded('loaded') 
    };
    init();
  }, []);



  if (loaded === 'loaded' && !nft.length) 
    return (<h1 className="p-20 text-4xl">No NFTs!</h1>)

  return (
    <div className="flex justify-center">
      <div style={{ width: 900 }}>
        <div className="grid grid-cols-2 gap-4 pt-8">
          {
              <div className="border p-4 shadow">
                <img src={nft.image} className="rounded" alt="Art NFT"/>
                <p className="text-2xl my-4 font-bold">Name: {nft.name}</p>
                <p className="text-2xl my-4 font-bold">Description: {nft.description}</p>
              </div>            
           }
        </div>
      </div>
    </div>
  )
}

export default Minter;
