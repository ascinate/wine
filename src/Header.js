import React, {useState ,useEffect } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaShoppingBasket, FaRegWindowClose, } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png";
import logomobiletop from "../src/images/logomb.png";
import cartimgn from "../src/images/product-5.png";
import cartimgm from "../src/images/product-3.png";

function Header(){
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 100);
   });
 }, []);

    return (
        <div>
           <header className={scroll ? "fixed-menu" : "hed-n"}>  
     
                <div className="mn-head">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between">
                            <NavLink to="/" className="navbar-brand" href="#">
                                <img src={logo} className="logo-main" alt="logo"/>
                                <img src={logomobiletop} className="logo-mobile" alt="logo"/>
                            </NavLink>
                            <div className="d-block mbile-checkout ms-auto d-lg-none">
                                <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaShoppingBasket/>
                                        <span className="cart-nuber">
                                            2
                                        </span>
                                        </button>
                                        <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                                            
                                            <li>
                                            <div className="comon-cart-ps">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <NavLink exact="true"  to="/" className="products-sm-pic">
                                                        <figure>
                                                            <img src={cartimgn} alt="bn"/>
                                                        </figure>
                                                    </NavLink>
                                                    <div className="cart-ps-details">
                                                        <NavLink exact="true" to="/" className="titel-crt-products">
                                                        viverra aliquam
                                                        </NavLink>
                                                        <h6> $12.52 </h6>
                                                        
                                                    </div>
                                                    <a  className="close-crt"> <FaRegWindowClose/> </a>
                                                </div>
                                            </div>
                                            <div className="comon-cart-ps">
                                                <div className="d-flex align-items-center justify-content-between">
                                                <NavLink exact="true" to="/" className="products-sm-pic">
                                                    <figure>
                                                        <img src={cartimgm} alt="bn2"/>
                                                    </figure>
                                                </NavLink>
                                                <div className="cart-ps-details">
                                                    <NavLink exact="true" to="/" className="titel-crt-products">
                                                    viverra aliquam
                                                    </NavLink>
                                                    <h6> $12.52 </h6>
                                                
                                                </div>
                                                <a className="close-crt"> <FaRegWindowClose/> </a>
                                            
                                                </div>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="sub-total-products d-flex align-items-center justify-content-between">
                                                <h6> Subtotal:  </h6>
                                                <h4> $36.52 </h4>
                                            </div>
                                            </li>
                                            <li>
                                            <NavLink exact to="/cart" className="btn d-table cart-drop-bn"> View Cart </NavLink>
                                            </li>
                                            <li>
                                            <NavLink exact to="/checkout" className="btn d-table check-drop-bn"> Check out </NavLink>
                                            </li>
                                        
                                        </ul>
                                </div>
                                </div>
                            <button className="navbar-toggler ms-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu" aria-controls="offcanvasExample">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
                                    <li className="nav-item">
                                      <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>

                                    <li className="nav-item">
                                      <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    
                                    <li className="nav-item dropdown dropdown-mega position-static">
                                      <NavLink className="nav-link mega-menu-a dropdown-toggle" to="/shop" data-bs-auto-close="outside">
                                        Shop
                                     </NavLink>
                                    
                                    <ul className="dropdown-menu dropdown-menu1 shadow">
                                        <li className="mega-content px-4">
                                        <div className="container-fluid">
                                            <div className="row row-cols-md-5 justify-content-between">
                                            <div className="col">
                                                <div className="comon-menu-div">
                                                    <h5> Red Wine</h5>
                                                    <hr/>
                                                    <ul className="list-unstyled">
                                                    <li> <NavLink to="/shop"> Cabernet Shira </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Big Banyan Merlot </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Barrique Reserve Shiraz </NavLink> </li>
                                                    <li> <NavLink to="/shop"> La Reserve </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Reserve Tempranillo </NavLink> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="comon-menu-div">
                                                <h5> Sparkling Wine </h5>
                                                <hr/>
                                                <ul className="list-unstyled">
                                                    <li> <NavLink to="/shop"> Asti Spumante </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Franciacorta </NavLink> </li>
                                                    <li> <NavLink to="/shop"> cremant dalsace </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Clairette de Die </NavLink> </li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="comon-menu-div">
                                                <h5> Dessert Wine </h5>
                                                <hr/>
                                                <ul className="list-unstyled">
                                                    <li> <NavLink to="/shop"> Calafuria </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Bralette </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Bandeau </NavLink> </li>
                                                    <li> <NavLink to="/shop"> feugiat congue </NavLink> </li>
                                                    
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="comon-menu-div">
                                                <h5> Rose Wine </h5>
                                                <hr/>
                                                <ul className="list-unstyled">
                                                    <li> <NavLink to="/shop"> Rosé Imperial Champagne </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Hampton Water Rose </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Miraval Provence Rosé </NavLink> </li>
                                                    <li> <NavLink to="/shop"> lacinia odio </NavLink> </li>
                                                    
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="comon-menu-div">
                                                <h5>  White Wine </h5>
                                                <hr/>
                                                <ul className="list-unstyled">
                                                    <li> <NavLink to="/shop"> Moscato </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Sauvignon Blanc </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Waterstone Bridge </NavLink> </li>
                                                    <li> <NavLink to="/shop"> Classic White </NavLink> </li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to="/faq">Faq</NavLink>
                                    </li>
                                    
                                
                                    <li className="nav-item">
                                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    
                                    
                                </ul>
                                
                            </div>
                           
                            <div className="justify-content-lg-end right-menu d-none  d-lg-grid justify-content-end">
                                <ul className="list-unstyled mb-0">
                                  <li className="d-flex align-items-center"> 
                                    
                                    <div className="dropdown position-relative mr-3">
                                    <button className="btn dropdown-toggle com-link cart-new-icon " type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaShoppingBasket/>
                                    </button>
                                    <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <NavLink to="/" className="products-sm-pic">
                                                    <figure>
                                                        <img src={cartimgn} alt="bn"/>
                                                    </figure>
                                                </NavLink>
                                                <div className="cart-ps-details">
                                                    <NavLink to="/" className="titel-crt-products">
                                                    Ultra Oil
                                                    </NavLink>
                                                    <h6> $12.52 </h6>
                                                </div>
                                                <a id="" className="close-crt"> <FaRegWindowClose/> </a>
                                            </div>
                                        </div>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                            <NavLink to="/" className="products-sm-pic">
                                                <figure>
                                                    <img src={cartimgm} alt="bn"/>
                                                </figure>
                                            </NavLink>
                                            <div className="cart-ps-details">
                                                <NavLink to="/" className="titel-crt-products">
                                                    Ultra Oil
                                                </NavLink>
                                                <h6> $12.52 </h6>
                                            </div>
                                            <a id="" className="close-crt"> <FaRegWindowClose/> </a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="sub-total-products d-flex align-items-center justify-content-between">
                                            <h6> Subtotal:  </h6>
                                            <h4> $36.52 </h4>
                                        </div>
                                        </li>
                                        <li>
                                        <NavLink to="/cart" className="btn cart-drop-bn"> View Cart </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/checkout" className="btn check-drop-bn"> Check out </NavLink>
                                        </li>
                                        
                                    </ul>
                                    <span className="cat-count"> 0 </span>
                                    </div>
                                    <a data-bs-toggle="modal" data-bs-target="#loginModal" className="btn com-link login-top"> <BsPerson/> </a>
                                    
                                 </li>
                                
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;