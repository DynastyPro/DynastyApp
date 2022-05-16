import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

const Testing2 = () => {

    const [data, setData] = useState(null)

    const url = 'https://api-v2-mainnet.paras.id/activities/top-users'

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
                <li><span></span>{data.data.collections[0].collection_id}</li>
                <li><span></span>{(data.data.collections[0].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[1].collection_id}</li>
                <li><span></span>{(data.data.collections[1].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[2].collection_id}</li>
                <li><span></span>{(data.data.collections[2].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[3].collection_id}</li>
                <li><span></span>{(data.data.collections[3].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[4].collection_id}</li>
                <li><span></span>{(data.data.collections[4].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[5].collection_id}</li>
                <li><span></span>{(data.data.collections[5].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[6].collection_id}</li>
                <li><span></span>{(data.data.collections[6].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[7].collection_id}</li>
                <li><span></span>{(data.data.collections[7].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[8].collection_id}</li>
                <li><span></span>{(data.data.collections[8].total_sum / 1000000000000000000000000).toFixed(2)}</li>
                <li><span></span>{data.data.collections[9].collection_id}</li>
                <li><span></span>{(data.data.collections[9].total_sum / 1000000000000000000000000).toFixed(2)}</li>
            </div>
        </div>
    );
}

export default Testing2;