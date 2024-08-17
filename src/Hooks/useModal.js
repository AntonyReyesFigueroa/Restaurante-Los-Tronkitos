import { useEffect, useState } from 'react'

const useModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true)

    useEffect(() => {
        setIsOpenModal(!isOpenModal)
    }, [])

    return { isOpenModal, setIsOpenModal }
}

export default useModal





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