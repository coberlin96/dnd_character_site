import React, { useState, useEffect } from 'react';
import { characterServerCalls } from '../api'

export const useGetData = () => {
    const [characterData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await characterServerCalls.getAll();
        setData(result)
    }

    // Introduce the useEffect Hook
    useEffect( () =>{
        handleDataFetch();
    }, [])
    return {characterData, getData:handleDataFetch}
}