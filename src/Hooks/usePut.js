import axios from 'axios'
import  { useEffect, useState } from 'react'

const usePut = (URL = '') => {


    const [update, setUpdate] = useState()

    const updateData = async (data = false, id='') => {
        if (data) {
            const response = await axios.put(URL+'/'+id, data).
                then(res => setUpdate(res?.data)).
                catch(err => console.log(err.message))
        }
    }


    useEffect(() => {
        updateData()
    }, [])


    return { update, updateData }
}

export default usePut