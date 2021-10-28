import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

//loop through each individual item in galleryItems array and pass it to the GalleryItem component 
//for further processing/rendering
function GalleryList( props ) {
    return (
        <div className="list">
            <div class="d-flex flex-row">
            {
                 props.galleryItems.map( ( thisItem ) =>(                 
                     <GalleryItem key={ thisItem.id } item={ thisItem } />
                 ) )
             }
           
            </div>
        </div>
    )
}
export default GalleryList;