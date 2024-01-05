import React from 'react'
import { useMetMuseumApi } from './api-hooks/useMetMuseumApi'

const HomePage = () => {

    const {artPieces} = useMetMuseumApi()

  return (
    <div className="home-page">
        <h1>Home Page</h1>

        <div className="art-pieces">
            {artPieces.map((objectID) => (
                <div key={objectID}>{console.log('ID==>',objectID)}</div>
            ))}
        </div>
    </div>
  )
}

export default HomePage