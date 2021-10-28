import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {

    const numRows = () => {
        let rowsToRender = 0;
        if ( props.galleryItems.length % 3 === 0 ) {
            rowsToRender = props.galleryItems.length / 3;
        } else {
            rowsToRender = ( props.galleryItems.length / 3 ) + 1;
        }
        return rowsToRender;
    }

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