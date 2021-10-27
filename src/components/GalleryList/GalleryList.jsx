import React from 'react';
import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    //const[ name, setName ] = useState( null );
    return (
        <div>
            <h2>GalleryList!!!</h2>
            {
                props.imagesArray.map( thisImage =>(
                    <GalleryItem key={thisImage.id} image={ thisImage }/>
                ))
            }
        </div>
    )
}

export default GalleryList;