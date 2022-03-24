import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const Testing = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

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
            <div className='text'>
                <li><span>Price: </span>{data[22].current_price}</li>
                <li><span>Exchange: </span>{data[22].name}</li>
                <li><span>Market Cap: </span>{data[22].market_cap}</li>
                <li><span>24hrs Volume: </span>{data[22].total_volume}</li>
                <li><span>Total Supply: </span>{data[22].max_supply}</li>
                <li><span>Circulating Supply: </span>{data[22].circulating_supply}</li>
                <li><span>Explorer: </span><a href='' >explorer.nearprotocol.com</a></li>
            </div>
        </div>
    );
}

export default Testing;
