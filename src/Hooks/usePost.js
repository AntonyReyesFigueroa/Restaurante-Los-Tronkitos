import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGet from './useGet'

const usePost = (URL = '') => {

    const [uploadData, setUploadData] = useState()

    const createData = async (data = false) => {
        if (data) {
            const response = await axios.post(URL, data).
                then(res => setUploadData(res?.data)).
                catch(err => console.log(err.message))
        }
    }


    useEffect(() => {
        createData()
    }, [])


    return { uploadData, createData }
}

export default usePost