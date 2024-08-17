import React, { useEffect, useState } from 'react'

const useOpenClosed = () => {
    const [isopen, setIsopen] = useState(true)

    useEffect(() => {
        setIsopen(!isopen)
    }, [])
    

  return {isopen, setIsopen}
}

export default useOpenClosed



// import axios from "axios"
// import { useEffect, useState } from "react"

// const useGetPlato = (URL = '') => {

//     const [plato, setPlato] = useState()

//     const getAllPlato = () => {
//         axios.get(URL)
//         .then(res => setPlato(res.data))
//         .catch(err => console.log("La URL es invalida"))
//     }

//  useEffect(() => {
//     getAllPlato()
//  },[])

//  return {getAllPlato, plato}

// }

// export default useGetPlato