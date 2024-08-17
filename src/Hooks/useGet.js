import axios from "axios"
import { useEffect, useState } from "react"


const useGet = (URL = '') => {
    const [data, setData] = useState()


    const getData = async () => {
        const response = await axios.get(URL).
        then(res => setData(res?.data)).
        catch(err => console.log(err.message))
    }
     


    useEffect(() => {
        getData()
    }, [])
    

  return {data, getData}
}

export default useGet