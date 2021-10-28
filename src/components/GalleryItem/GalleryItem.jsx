import React from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem( props ) {
    const NO_PEOPLE_LOVE = `No people love this :(`;
    const ONE_PERSON_LOVE = ` person loves this!`;
    const MANY_PEOPLE_LOVE = ` people love this!`;

    //when the item is rendered on the screen it should be created with it's properties from the server
    const [ item, setItem ] = useState ( {
        id: props.item.id,
        path: props.item.path,
        description: props.item.description,
        likes: props.item.likes
    });

    //set the 'show' state of the image or description
    const[show, setShow] = useState(  true );   

    //show or hide the image/desription depending on the value of show
    const toggleItem = () => {
        setShow( !show );
    }

    //increase the number of loves by 1 each time a user clicks on the loves button
    const increaseCount = ( )=>{
        setItem( {
            ...item, likes: ++item.likes 
        })
        //make a call to server via axios
        updatePhotoLikes();
    }

    //update (PUT) the likes value for this item on the server
    //use axios as middleware to the server
    const updatePhotoLikes = ( ) =>{
        axios.put( `/gallery/like/${item.id}`, item ).then( ( response )=>{
            console.log( response.data );
        }).catch( ( error ) =>{
            alert( 'error' );
            console.log( error );
        });
    }    

    //determine the text to show on the screen - depends on how many people love the image
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
        <div class="d-flex flex-column">
            <div className="item">
                { show ?
                    <img src={item.path} onClick={toggleItem} class="img-fluid"></img> :
                    <p id="description" onClick={toggleItem}>{item.description}</p>
                }
            </div>
            <div className='itemLikesInfo'>
                <button className="countButton" onClick={() => increaseCount()}>love it!</button>
                <p className="countText">{getCountText()}</p>
            </div>
        </div>
        )    
}

export default GalleryItem;