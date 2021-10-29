import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {

    // const setResult =()=>{
    //     console.log( `in setResult of Body` );
    //     return "OK";
    // }

    return( 
    <div class="container">

        <div class="d-flex flex-row">
            <div className = "itemsList">
                <button onClick={ () => props.onDeleteEvent(setResult())}>Push me to send result to parent!</button>
                <GalleryList galleryItems={props.galleryItems} onDeleteEvent="OK"/> 
            </div>
        </div>
    </div>
    )
}

export default Body;