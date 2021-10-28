import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    return (
        <div>
            {
                props.galleryItems.map( thisItem =>(
                    <GalleryItem key={thisItem.id} item={ thisItem }/>
                ) )
            }
        </div>
    )
}

export default GalleryList;