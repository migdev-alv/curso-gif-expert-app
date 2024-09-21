import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const gifs = await getGifs(category);
            setImages(gifs);
        }

        getImages();
        setIsLoading(false);
    }, []);

    return {
        images,
        isLoading,
    }
}