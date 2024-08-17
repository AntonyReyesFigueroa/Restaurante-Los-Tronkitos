import React, { useEffect, useRef, useState } from 'react'

const useSubirImage = (could_name='', upload_preset_name='') => {

    const [image, setImage] = useState(false)

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: could_name,
            uploadPreset: upload_preset_name
        }, function (error, result) {
            if (result?.event == 'queues-end') {
                setImage(result.info.files[0].uploadInfo.url)
            }

        });
    }, [])

    const btnSubir =() => widgetRef.current.open()

  return {image, btnSubir}
}

export default useSubirImage