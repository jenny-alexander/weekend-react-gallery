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
            {/* <input type="text" placeholder="First name"/>
            <button type="button" class="btn btn-outline-secondary">This is a button</button> */}

            <form>
              <div class="row">
                <div class="col-9">
                  <input type="text" class="form-control" id="imageURL" placeholder="Enter image URL here"/>
                </div>
                <div class="col-2">
                  <button class="btn btn-outline-secondary">Add image</button>
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
