import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {
    return( 
    <div>
        <GalleryList galleryItems={props.galleryItems} /> 
    </div>
    )
}

export default Body;