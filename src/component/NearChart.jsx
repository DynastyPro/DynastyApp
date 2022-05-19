import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../Styles/NearChart.css'

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
        <div className='near-chart'>
            <marquee>
                <div className='api-content'>
                    <div className='content'><span>Price: </span>{data.market_data.current_price.usd}</div>
                    <div className='content'><span>Exchange: </span>{data.name}</div>
                    <div className='content'><span>Market Cap: </span>{data.market_data.market_cap.usd}</div>
                    <div className='content'><span>24hrs Volume: </span>{data.market_data.total_volume.usd}</div>
                    <div className='content'><span>Total Supply: </span>{data.market_data.max_supply}</div>
                    <div className='content'><span>Circulating Supply: </span>{data.market_data.circulating_supply}</div>
                    <div className='content'><span>Explorer: </span><a href='' >{data.links.blockchain_site[0]}</a></div>
                </div>
            </marquee>
        </div>
    );
}

export default Nearchart;
