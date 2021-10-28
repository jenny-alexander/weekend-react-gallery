import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {

    //determine how many rows should be rendered when creating GalleryList component
    //this helps to keep the creation of rows dynamic. (TODO for stretch)
    const numRows = () => {
        let rowsToRender = 0;
        if ( props.galleryItems.length % 3 === 0 ) {
            rowsToRender = props.galleryItems.length / 3;
        } else {
            rowsToRender = ( props.galleryItems.length / 3 ) + 1;
        }
        return rowsToRender;
    }
    ////pass the array of items to the GalleryList component for further processing/rendering
    return( 
    <div class="container">
        <div class="d-flex flex-row">
            <div className = "itemsList">
                <GalleryList galleryItems={props.galleryItems} rowsToRender={numRows()} /> 
            </div>
        </div>
    </div>
    )
}

export default Body;