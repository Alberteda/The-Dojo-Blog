import {useEffect, useState} from 'react'



export const useMetMuseumApi = () => {
    const [artPieces, setArtPieces] = useState([])

    

    useEffect(() => {
        const fecthArtObjects = async () => {
            try {
                const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
                const data = await response.json()
                console.log(data)
                setArtPieces(data.objectIDs)
            } catch (error) {
                console.error('Error fetching data', error)
            }   
        }

        fecthArtObjects()
}, [])

    return {
        artPieces
    }
}