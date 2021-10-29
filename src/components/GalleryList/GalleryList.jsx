import React from 'react';
import './GalleryList.css';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

//loop through each individual item in galleryItems array and pass it to the GalleryItem component 
//for further processing/rendering
function GalleryList( props ) {
    //const[countOfItems, setCountOfItems] = useState ( props.galleryItems.length );
    
    const handleDelete = ( resultOfDelete )=>{
        return resultOfDelete;
    }

    return (
        <div className="list">
            <div class="d-flex flex-wrap">
            {
                 props.galleryItems.map( ( thisItem ) =>(                 
                     <GalleryItem key={ thisItem.id } item={ thisItem } itemDeleted= { (resultOfDelete)=> props.handleDelete( handleDelete( resultOfDelete ) ) } />
                    // <GalleryItem key={ thisItem.id } item={ thisItem }/>
                 ) )
             }
            </div>
        </div>
    )

}
export default GalleryList;