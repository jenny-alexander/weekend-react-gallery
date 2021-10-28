import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {
    return( 
    <div class="container">
        <div class="d-flex flex-row">
            <div className = "itemsList">
                <GalleryList galleryItems={props.galleryItems} /> 
            </div>
        </div>
    </div>
    )
}

export default Body;