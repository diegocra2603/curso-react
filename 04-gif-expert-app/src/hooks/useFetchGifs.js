import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagesApi = async () => {
        const imagesAPI = await getGifs(category)
        setImages(imagesAPI)
        setIsLoading(false)
    }

    useEffect(() => {
        getImagesApi()
    }, [category])

    return {
        images,
        isLoading
    }
}
