import React from 'react';
import { useState } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    return (
        <div class="d-flex flex-row">
            {
                props.galleryItems.map( ( thisItem, index ) =>(
                    <GalleryItem key={ thisItem.id } item={ thisItem } imageIndex={ index } imageCount={ props.galleryItems.length }/>
                ) )
            }
        </div>
    )
}
export default GalleryList;