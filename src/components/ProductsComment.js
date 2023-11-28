import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import CoustomerReview from "./CoustomerReview";
import { FaShoppingBasket, FaExternalLinkAlt } from "react-icons/fa";

function ProductsComment(){
    return (
        <>
        <div className="bottom-details">
                            
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            description
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Shipping details</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="comon-description-products">
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                <h5> Lorem ipsum dolor sit amet </h5>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                <h5> Busey ipsum dolor sit amet </h5>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                <h5> Busey ipsum dolor sit amet </h5>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="comon-description-products">
                                
                                <h5> Returns policy </h5>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                <h5> Shipping details </h5>
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                                
                                <p> Nam tempus turpis at metus scelerisque placerat nulla deumantos 
                                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis 
                                ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo 
                                pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <CoustomerReview/>

                    <div className="review-form col-lg-7 mt-3">
                        <h5> Leave a Comment </h5>
                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <div className="from-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from-group">
                                <textarea class="form-control ted"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from-group">
                                <input type="submit" className="btn submit" value="submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </>
    );
}
export default ProductsComment;