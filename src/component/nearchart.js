import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const Nearchart = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&community_data=true&developer_data=true'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)

    if(!data) return null

    return (
        <div className='nearchart'>
            <marquee>
                <div className='text'>
                    <li><span>Price: </span>{data.market_data.current_price.usd}</li>
                    <li><span>Exchange: </span>{data.name}</li>
                    <li><span>Market Cap: </span>{data.market_data.market_cap.usd}</li>
                    <li><span>24hrs Volume: </span>{data.market_data.total_volume.usd}</li>
                    <li><span>Total Supply: </span>{data.market_data.max_supply}</li>
                    <li><span>Circulating Supply: </span>{data.market_data.circulating_supply}</li>
                    <li><span>Explorer: </span><a href='' >{data.links.blockchain_site[0]}</a></li>
                </div>
            </marquee>
        </div>
    );
}

export default Nearchart;
