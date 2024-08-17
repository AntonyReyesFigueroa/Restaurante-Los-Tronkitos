import axios from 'axios'
import  { useEffect, useState } from 'react'

const useDelete = (URL = '') => {

    const [delteValue, setDelteValue] = useState()

        const deleteData = async ( id=false) => {
            if (id) {
                const response = await axios.delete(URL+'/'+id).
                    then(res => setDelteValue(res?.data)).
                    catch(err => console.log(err.message))
            }
        }
    
    
        useEffect(() => {
            deleteData()
        }, [])
    
    
        return { delteValue, deleteData }
}

export default useDelete


