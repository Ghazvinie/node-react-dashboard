import React, {useEffect, useState} from 'react';

export default function CPU(){
    const [data, setData] = useState();

    useEffect(() => {
        const connectToBE = async () => {
            const res = await fetch('/api', {
                method: 'GET',
            });
            const parsedRes = await res.json();
            setData(parsedRes);
        };
        connectToBE();

    }, [])

    
    return (
        <div>
            CPU
            {data}
        </div>
    )
}