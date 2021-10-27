import React from 'react';
import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ) {
    //const[ name, setName ] = useState( null );
    return( 
    <div>
        <h2>Body</h2>
        <p>Gallery goes here</p>
        <img src="images/jen_outside_1982.jpeg"/>
        <img src="images/jen_computer_1988.jpeg"/>
        <img src="images/jen_wedding_2006.jpeg"/>
        <img src="images/samson_alexa_2019.jpeg"/>
        <img src="images/living_in_america_2020.jpeg"/>
        <img src="images/kids_Arboretum_2021.jpeg"/>
        { <GalleryList imagesArray={props.imagesArray} /> }
    </div>
    )
}

export default Body;