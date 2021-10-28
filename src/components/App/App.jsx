import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Body from '../Body/Body';

function App() {
  const [ galleryItems, setGalleryItems ] = useState( [] );

  useEffect( ()=>{
      console.log('Component loaded');
      getItems();
  }, []); //<-- SUPER IMPORTANT to put this empty array in here.

  const getItems=()=>{
    axios.get( '/gallery' ).then( ( response )=>{
      console.log( response.data );
      setGalleryItems( response.data );

    }).catch( ( err ) =>{
      alert('error');
      console.log(err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Body galleryItems={ galleryItems } />
      </div>

    );
}

export default App;
