import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

export default function CPU() {


    const testQuery = gql`{
      testData(id: 2) {
        name,
        number
      }
    }`;

    const {loading, error, data} = useQuery(testQuery)
    console.log(error, data, loading)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(error)

    return (
        <div>
            CPU
            {data.testData.name}
        </div>
    )
}