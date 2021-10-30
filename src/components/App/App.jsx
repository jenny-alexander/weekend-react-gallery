import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [ galleryItems, setGalleryItems ] = useState( [] );
  const [ imageURL, setImageURL ] = useState( '' );
  const [ imageDescription, setImageDescription ] = useState( '' );

  /**
   * When the page is loaded/rendered, get the items from database.
   * useEffect() is similar to "$( document ).ready( onReady )" of jQuery.
   */
  useEffect( ()=>{
      getItems();
  }, []); //<-- Don't forget to put this empty array in here.
/**
 * Get the items from the server using axios middleware call
*/ 
  const getItems=()=>{
    axios.get( '/gallery' ).then( ( response )=>{
      setGalleryItems( response.data );        
    }).catch( ( err ) =>{
      alert('error');
      console.log(err);       
    })
  }
/**
*  Get the item from the button click on grandchild component 'GalleryItem' and pass it back up to the App.
   Using the item id and item, delete the item from the gallery.
   Note: I tried to do the delete on the GalleryItem component but had trouble figuring out how to get the
   parent state to change from GalleryItem (this (state change) is needed in order for the page to refresh
   after a delete and show the updated items from the db). Instead, I passed the item id back to parent!
 */
  const handleDeleteEvent = ( item )=>{
    Swal.fire({
      title: 'Would you like to delete the image?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4CAF50',
      denyButtonText: `No`,
      denyButtonColor: '#78808C',
    }).then( ( result ) => {
      if ( result.isConfirmed ) {    
        axios.delete( `/gallery/delete/${item.id}`, item ).then( (response ) =>{
          //use sweetalert functionality
          Swal.fire({
            title: 'Success!',
            text: "Item deleted!",
            icon: 'success',
            showCancelButton: false,
            showCloseButton: true,
            confirmButtonColor: '#3da133',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {
                getItems();
            }
          })   
        }).catch( ( error ) =>{
            console.log( error );
            Swal.fire({
              icon: 'error',
              title: 'Oops, something went wrong!',
              text: 'There was an error removing the item.',
              footer: 'Check console for details.'
            })             
        })
      }
    })
}
/**
 * When the user adds a new image, create a new item object and then pass that to axios.post
 */
  const handleAddEvent = ( ) =>{    
    if ( imageURL && imageDescription !== '' ) {
      let newItem = createItemObject( imageURL, imageDescription );

      axios.post( `/gallery`, newItem ).then( ( response )=>{
        getItems();
      }).catch( ( error ) =>{
        alert( 'Error adding image!' );
        console.log( error );
      })
    }
  }
/**
 * Create the task object to send to the database.
 */
  const createItemObject = ( imageURL, imageDescription ) => {
    let item = {
        id : '',
        path: imageURL,
        description: imageDescription,
        likes: 0
    };
  return item;
}
/**
 * Get the value that the user typed into the 'image URL' input element
 */
  const handleURLChange = ( event )=>{
    setImageURL(event.target.value);
  }
/**
 * Get the value that the user typed into the 'image description' input element  
 */ 
  const handleDescriptionChange = ( event )=>{
    setImageDescription(event.target.value);
  }  
  /**
   * Render the page by passing the array of gallery items to the GalleryList component
   */
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Bird Images</h1>
          <p className="birdQuote">In order to see birds it is necessary to become part of the silence. -Robert Lynd</p>
        </header>

        <div class="container">

          <div className="itemInput">
            <form>
              <div class="row">
                <p id="addImageTitle">Add an image:</p>
              </div>
              <div class="row">
                <div class="col-5">
                  <input type="text" class="form-control" id="imageURL" placeholder="Enter image URL here"
                          onChange= { ( event )=>handleURLChange ( event ) } required/>
                </div>
                <div class="col-5">
                  <input type="text" class="form-control" id="imageDescription" placeholder="Enter image description here"
                          onChange={ ( event )=>handleDescriptionChange( event ) } required />
                </div>                
                <div class="col-2">
                  <button id="addButton" class="btn btn-secondary" onClick={ handleAddEvent }>Add</button>
                </div>
              </div>

            </form>
          </div>

          <div className="outputList">
            <div class="d-flex flex-row">
                <div className = "itemsList">
                    <GalleryList galleryItems={galleryItems} 
                                 handleDelete={ ( itemFromGallery ) =>{ handleDeleteEvent( itemFromGallery ) } }/> 
                </div>
            </div>
          </div>
        </div>
      <p id="copyright">&#169; Images courtesy of The Cornell Lab of Ornithology</p>
      </div>
    );
}

export default App;