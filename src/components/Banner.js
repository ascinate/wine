import React from "react";
import { NavLink } from "react-router-dom";
import Bannerpicone from "../images/banner2.jpg";
import Bannerpictwo from "../images/banner.jpg";
import Bannerpicthree from "../images/banner3.jpg";
import { FaShoppingCart } from "react-icons/fa";

function Banner(){
    return (
        <div className="banner-part" >

            <div className="css-slider-wrapper">
            <input
                type="radio"
                name="slider"
                className="slide-radio1"
                checked
                id="slider_1"
            />
            <input type="radio" name="slider" className="slide-radio2" id="slider_2" />
            <input type="radio" name="slider" className="slide-radio3" id="slider_3" />
            


            <div className="slider-pagination">
                <label for="slider_1" className="page1">
                
                </label>
                <label for="slider_2" className="page2">
                
                </label>
                <label for="slider_3" className="page3">
                
                </label>
                
            </div>


            <div className="slider slide-1">
                <div className="img-div"> 
                
                <div className="spring-animation">
                    <img src={Bannerpicone} alt="" /> 
                </div>
                </div>
                <div className="container">
                <div className="col-lg-6 ms-auto">
                    <div className="slider-content">
                        <h4> Taste our </h4>
                        <h2>Contrary Popular
                        <span className="d-block"> Vintage Wine </span>  </h2>
                        <p>It is a long lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>
                        <NavLink to="/shop" className="buy-now-btn" name="button"> <FaShoppingCart/> Shop Now </NavLink>
                    </div>
                </div>
                </div>
            
            </div>


            <div className="slider slide-2">
            
                <div className="img-div"> 
                
                <div className="spring-animation">
                    <img src={Bannerpictwo} alt="" /> 
                </div>
                </div>
                <div className="container">
                <div className="col-lg-6 ms-auto">
                    <div className="slider-content">
                        <h4>Today Special</h4>
                        <h2> Discount 50%
                        <span className="d-block"> All Red Wine </span> </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard. </p>
                        <NavLink to="/shop" className="buy-now-btn" name="button"> <FaShoppingCart/> Order Now </NavLink>
                    </div>
                </div>
                </div>
            
            </div>


            <div className="slider slide-3">
            
                <div className="img-div"> 
                <div className="spring-animation"> 
                    <img src={Bannerpicthree} alt="" /> 
                </div> 
                </div>
                <div className="container">
                <div className="col-lg-6 ms-auto">
                    <div className="slider-content">
                    <h4>Taste our Wine</h4>
                    <h2> Quality Wine from
                    <span className="d-block"> Organically Grown </span> </h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard. </p>
                    <NavLink to="/shop" className="buy-now-btn" name="button"> <FaShoppingCart/> Order Now </NavLink>
                    </div>
                </div>
                </div>
                
            </div>

            
            </div>
    
        </div>
    );
}
export default Banner;