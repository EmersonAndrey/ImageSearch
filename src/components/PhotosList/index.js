import React from 'react'
import "./index.css"

const PhotosList = React.memo(({ photos }) => {
    return (
        <div className="photo-list">
            {photos && photos.length > 0 ? (
                photos.map((photo) => (
                    <div className='photo' key={photo.id}>
                        <img
                            src={photo.src.medium}
                            alt={photo.alt}
                            className='photo-img'
                        />
                    </div>
                ))
            ) : (
                <p style={{ color: 'black' }}>Look for something</p>
            )}
        </div>
    )
})

export default PhotosList

