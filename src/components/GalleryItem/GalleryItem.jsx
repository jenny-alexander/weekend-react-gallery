import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';

function GalleryItem( props ) {
    //const[ name, setName ] = useState( null );
    const[show, setShow] = useState(  true );    

    const toggleImage = () => {
        setShow( !show );
    }

    return (
        <div>
            {    
                show? 
                <img src={props.image.path} onClick={ toggleImage }></img>:
                <p onClick={ toggleImage }>{props.image.description}</p>
            }     
            <Button text="love it!" image={props.image}/>
            
        </div>
        )    
}

export default GalleryItem;