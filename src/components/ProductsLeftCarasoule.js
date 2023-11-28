import React, {useState, Component } from "react";
import Productmorepic from "./ProdcutscarasoleApi";
import "react-image-gallery/styles/css/image-gallery.css";
import imga from "../images/product-3.png";
import imgb from "../images/product-5.png";
import imgc from "../images/product-7.png";
import imgd from "../images/product-8.png";

import ImageGallery from 'react-image-gallery';


function ProductsLeftCarasoule(){
   
  const images = [
    {
      original: 'images/product-3.png',
      thumbnail: 'images/product-3.png',
    },
    {
      original: 'images/product-5.png',
      thumbnail: 'images/product-5.png',
    },
    {
      original: 'images/product-7.png',
      thumbnail: 'images/product-7.png',
    },
  ];
    return(
        <>
            <div className="products-slide-1">

                   <ImageGallery items={images} 
                   showPlayButton={false}
                   showFullscreenButton={false}/>
               

            </div>
        </>
    );
}
export default ProductsLeftCarasoule;