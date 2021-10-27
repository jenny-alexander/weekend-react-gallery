import React from 'react';
import { useState } from 'react';

function GalleryItem( props ) {
    //const[ name, setName ] = useState( null );
    const[show, setShow] = useState(  false );    

    const toggleImage = () => {
        setShow( !show );
    }

    return (
        <div>
            <img src={props.image.path}></img>
            {
                
            
                // show? 
                // <img src={props.image.location} onClick={ toggleImage }></img>:
                // <h1 onClick={ toggleImage }>{props.image.altText}</h1>
            }     
        </div>
        )    
}

export default GalleryItem;