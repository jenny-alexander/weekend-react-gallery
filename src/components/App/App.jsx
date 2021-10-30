import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [ galleryItems, setGalleryItems ] = useState( [] );

  useEffect( ()=>{
      getItems();
  }, []); //<-- SUPER IMPORTANT to put this empty array in here.

  //get the items from the server using axios middleware call
  const getItems=()=>{
    axios.get( '/gallery' ).then( ( response )=>{
      setGalleryItems( response.data );
    }).catch( ( err ) =>{
      alert('error');
      console.log(err);
    })
  }
/* Get the item from the button click on grandchild component 'GalleryItem' and pass it back up to the App.
   Using the item id and item, delete the item from the gallery.
   Note: I tried to do the delete on the GalleryItem component but had trouble figuring out how to get the
   parent state to change from GalleryItem (this (state change) is needed in order for the page to refresh
   after a delete and show the updated items from the db). Instead, I passed the item id back to parent!
*/
  const handleDeleteEvent = ( item )=>{
      axios.delete( `/gallery/delete/${item.id}`, item ).then( (response ) =>{
          console.log( response.data );
          //TODO: Replace with SWAL
          alert( `Image deleted successfully`)
          getItems();
      }).catch( ( error ) =>{
          alert('error');
          console.log( error );
      })
  }

  /*
  #1 - Get the image URL from the URL input.
  #2 - Get the desription from the input.
  #3 - Pass values from #1 and #2 down to the GalleryList child component as PROPS.
       On click, we want to pass itemURL and itemDescription as parameters to the function (which is being sent as a prop).
       The function should return an item which will get sent to the handleAddEvent() function in the App component
  #4 - GalleryList should pass these props down to the GalleryItem component.
  #5 - In GalleryItem component, we create a new item using the setState and then
      pass the item back up to the App.
  #6 - In App, we call handleAddEvent with the item that came from the GalleryItem.
  */
  const handleAddEvent = ( item )=>{
    axios.post( `/gallery`, item ).then( ( response )=>{
      alert(` Image added successfully!` );
      getItems();
    }).catch( ( error ) =>{
      alert( 'Error adding image!' );
      console.log( error );
    })
  }
    //pass the array of items to the Body component for further processing/rendering
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Images</h1>
        </header>

        <div class="container">

          <div className="itemInput">
            <form>
              <div class="row g-2">
                <div class="col-6">
                  <input type="text" class="form-control" id="imageURL" placeholder="Enter image URL here"/>
                </div>
                <div class="col-3">
                  <input type="text" class="form-control" id="imageDescription" placeholder="Enter image description here"/>
                </div>                
                <div class="col-2">
                  <button class="btn btn-outline-secondary" onClick={ handleAddEvent }>Add image</button>
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

      </div>
    );
}

export default App;
