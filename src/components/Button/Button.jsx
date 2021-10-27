import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Button( props ) {
    const ONE_PERSON_LOVE = ` person loves this!`;
    const MANY_PEOPLE_LOVE = ` person loves this!`;
    //const[ name, setName ] = useState( null );
    let [ clickCount, setClickCount ] = useState( 0 );

    const increaseCount = ( )=>{
        setClickCount(clickCount + 1);
        //make a call to server via axios
        updatePhotoLikes();
    }
    const getClickCount = ()=>{
        let returnText = `No people love this :(`;
        if( clickCount !== 0 ) {
            if( clickCount === 1 ) {
                returnText = clickCount + ONE_PERSON_LOVE;
            } else {
                returnText = clickCount + MANY_PEOPLE_LOVE;
            }
        }
        return returnText;
    }
    const updatePhotoLikes = () =>{
        console.log(`in updatePhotoLikes`);
        JSON.stringify( props );
        axios.put(`http://localhost:5000/gallery?id=${props.image.id}`, props.image )
            .then( response => console.log( response.data ) )
    }

    return (
        <div>
            <button className="countButton" onClick={ () => increaseCount() }>{props.text}</button>
            <p className="countText">{getClickCount()}</p>
        </div>
    )
}

export default Button;