import React from 'react';
import './App.css';
import axios from 'axios';
import Body from '../Body/Body';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

const api = axios.create({
  baseURL: `http://localhost:5000/gallery`
})

function App() {
    //get images from server using axios
    let images = [];

    api.get('/').then(res => {
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        images.push( res.data[i] );
      }
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Body imagesArray={images} />
      </div>

    );
}

export default App;
