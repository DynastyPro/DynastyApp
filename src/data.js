import {FaDiscord} from 'react-icons/fa'
import {FiGlobe, FiTwitter} from 'react-icons/fi'
import image1 from './Images/collection/image1.jpg';
import image2 from './Images/collection/image2.webp';
import image3 from './Images/collection/image3.jpg';
import paras from "./Images/paras.svg";


export const listData = [
    {
        id: 1,
        background: <img src={image1} style={{width: "300", height: "180px", borderRadius: "10px"}} />,
        name: 'ARCHITECTURE X CRYPTO',
        content: 'A collection where Architecture meets Cryptocurrency',
        link: 
          <div className="social">
            {/* <a href=''><FaDiscord className="icon"/></a> */}
            {/* <a href=''><FiGlobe className="icon"/></a> */}
            <a href='https://twitter.com/ARKILABOT19?s=09'><FiTwitter className="icon"/></a>
            <a href='https://paras.id/collection/architecture-x-crypto-by-arkilabotnear'><img src={paras} style={{width: "33px", borderRadius: "10px"}} /></a>
          </div>

    },
    {
        id: 2,
        background: <img src={image2} style={{width: "300", height: "180px", borderRadius: "10px"}} />,
        name: 'imahinasyon',
        content: "A peak into the creator's mind. A collection of 1/1 art made every day by arki_bootzz. a project that will be done in 365 days. each day new artwork and a new story to tell.",
        link: 
          <div className="social">
            <a href='https://discord.gg/5nCubfRC'><FaDiscord className="icon"/></a>
            {/* <a href=''><FiGlobe className="icon"/></a> */}
            <a href='https://twitter.com/arki_bootzz'><FiTwitter className="icon"/></a>
            <a href='https://paras.id/collection/imahinasyon-by-arkibootzznear'><img src={paras} style={{width: "33px", borderRadius: "10px"}} /></a>
          </div>

    },
    {
        id: 3,
        background: <img src={image3} style={{width: "300", height: "180px", borderRadius: "10px"}} />,
        name: 'GreatPan',
        content: "We're building a blockchain-based ticketing platform to make real-world and metaverse events more accessible to those with NFT holdings, which will be available on the NEAR blockchain.",
        link: 
          <div className="social">
            <a href=''><FaDiscord className="icon"/></a>
            <a href=''><FiGlobe className="icon"/></a>
            <a href=''><FiTwitter className="icon"/></a>
            <a href=''><img src={paras} style={{width: "33px", borderRadius: "10px"}} /></a>
          </div>

    },
    // {
    //     id: 4,
    //     background: <img src={image1} style={{width: "300", height: "180px", borderRadius: "10px"}} />,
    //     name: 'Lorem',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis erat elementum mauris egestas risus justo pulvinar morbi integer. Condimentum ipsum ac ullamcorper.',
    //     link:
    //       <div className="social">
    //         <a href=''><FaDiscord className="icon"/></a>
    //         <a href=''><FiGlobe className="icon"/></a>
    //         <a href=''><FiTwitter className="icon"/></a>
    //         <a href=''><img src={paras} style={{width: "33px", borderRadius: "10px"}} /></a>
    //       </div>

    // }
]