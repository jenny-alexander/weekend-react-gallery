import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    
    const handleDelete = ( itemDeleted )=>{
        return itemDeleted;
    }
/* Loop through each individual item in galleryItems array and pass it to the GalleryItem component 
   for further processing/rendering */
    return (
        <div className="list">
            <div class="d-flex flex-wrap">
            {
                props.galleryItems.map( ( thisItem ) =>(                 
                    <GalleryItem key={ thisItem.id } item={ thisItem } 
                                 itemDeleted= { ( itemDeleted )=> props.handleDelete( handleDelete( itemDeleted ) ) } />
                 ) )
             }
            </div>
        </div>
    )
}
export default GalleryList;