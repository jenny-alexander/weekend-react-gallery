import React from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';
//import { response } from 'express';

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

    const deleteItem = ( )=>{
        axios.delete( `/gallery/delete/${item.id}`, item ).then( (response ) =>{
            console.log( response.data );
        }).catch( ( error ) =>{
            alert('error');
            console.log( error );
        })
        //TODO: The following return statement doesn't seem like the right way to do this. I want to be able to send
        //a message of sorts back to the parent component (App). I just want to return something to trigger
        //the handleDeleteEvent function get triggered in App. 
        //I tried to set the "SUCCESS" message in the 'then' of the delete statement above but that didn't work
        //and nothing was getting set (maybe because the return response happens too fast?). NEED TO ASK DEV.
        return "SUCCESS"; 
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
        <div className="item">
            <div className="itemImage">
                { show ?
                    <img src={item.path} onClick={toggleItem} class="img-fluid rounded shadow"></img> :
                    <p id="description" onClick={toggleItem}>{item.description}</p>
                }
            </div>
            <div className="itemLikesInfo">
                <button id="increaseCountButton" class="btn btn-outline-dark" alt="like image" onClick={() => increaseCount()}>&hearts;</button>
                {/* <button id="deleteItemButton" class="btn btn-outline-dark" alt="trash image" onClick={() => deleteItem()}>&#128465;</button> */}
                <button id="deleteItemButton" class="btn btn-outline-dark" alt="trash image" onClick={ () => props.itemDeleted( deleteItem() ) }>&#128465;</button>
                <p className="countText">{getCountText()}</p>
            </div>
        </div>
        
        )    
}


export default GalleryItem;