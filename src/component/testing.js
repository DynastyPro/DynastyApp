import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const Testing = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/near?tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false'

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
            <img src={data.image} alt='' />
            <h3>{data.liquidity_score}</h3>
            <h3>{data.market_data}</h3>
            <h3>{data.coingecko_rank.current_price}</h3>
        </div>
    );
}

export default Testing;
