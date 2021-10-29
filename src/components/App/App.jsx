import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import Body from '../Body/Body';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [ galleryItems, setGalleryItems ] = useState( [] );

  useEffect( ()=>{
      console.log('Component loaded');
      getItems();
  }, []); //<-- SUPER IMPORTANT to put this empty array in here.

  //get the items from the server using axios middleware call
  const getItems=()=>{
    axios.get( '/gallery' ).then( ( response )=>{
      console.log(`in getItems()` );
      setGalleryItems( response.data );

    }).catch( ( err ) =>{
      alert('error');
      console.log(err);
    })
  }
  const handleDeleteEvent = ( result )=>{
    console.log (`in handleDeleteEvent in APP and result is:`, result )
    if ( result === 'SUCCESS' ) {
      alert( `Image deleted successfully`)
      getItems();
    } else
      alert ( `Error deleting image!` );
  }
    //pass the array of items to the Body component for further processing/rendering
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Images</h1>
        </header>

        <div class="container">
          <div class="d-flex flex-row">
              <div className = "itemsList">
                  <GalleryList galleryItems={galleryItems} handleDelete={ ( resultFromList ) =>{ handleDeleteEvent( resultFromList ) } }/> 
                  {/* <GalleryList galleryItems={galleryItems}/>  */}
              </div>
          </div>
        </div>
      </div>

    );
}

export default App;
