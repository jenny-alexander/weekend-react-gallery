import React from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem( props ) {
    const NO_PEOPLE_LOVE = `No people love this :(`;
    const ONE_PERSON_LOVE = ` person loves this!`;
    const MANY_PEOPLE_LOVE = ` people love this!`;

    const [ item, setItem ] = useState ( {
        id: props.item.id,
        path: props.item.path,
        description: props.item.description,
        likes: props.item.likes
    });

    const[show, setShow] = useState(  true );    

    const toggleItem = () => {
        setShow( !show );
    }

    const increaseCount = ( )=>{
        setItem( {
            ...item, likes: ++item.likes 
        })
        //make a call to server via axios
        updatePhotoLikes();
    }

    const updatePhotoLikes = ( ) =>{
        axios.put( `/gallery/like/${item.id}`, item ).then( ( response )=>{
            console.log( response.data );
        }).catch( ( error ) =>{
            alert( 'error' );
            console.log( error );
        });
    }    

    const getCountText = ()=>{
        let text = NO_PEOPLE_LOVE;
        if( item.likes !== 0 ) {
            if( item.likes === 1 ) {
                text = item.likes + ONE_PERSON_LOVE;
            } else {
                text = item.likes + MANY_PEOPLE_LOVE;
            }
        }
        return text;
    }

    return (


        <div class="d-flex flex-column border rounded">
            <div>
                { show ?
                    <img src={item.path} onClick={toggleItem} class="img-fluid"></img> :
                    <p onClick={toggleItem}>{item.description}</p>
                }
            </div>

            <div className='itemLikesInfo'>
                {/* <button onClick={ increaseCount }>love it!</button>
    TODO: (Ask about this) The code above was giving me a warning "Functions
    are not valid as a React child". I think this is because the function returns something and I
    wasn't putting that "thing" into anything (capturing it). I should check with Dev.
    Also, if I put onClick={ increaseCount() }, it was looping (re-rendering) too many times
    and I would get a lot of errors and nothing would appear on my screen. I think this is because
    the function was getting executed when the button was added to the screen (rendered)...? */}
                <button className="countButton" onClick={() => increaseCount()}>love it!</button>
                {/* <p className="countText">{setClickCountText()}</p> */}
                <p className="countText">{getCountText()}</p>
                <p>This is index no: {props.imageIndex}</p>
            </div>

        </div>
        )    
}

export default GalleryItem;