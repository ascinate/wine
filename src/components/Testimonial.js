import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TesimonialReviw from "./TestimonialdetailsApi";
import { FaStar } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonial(){
    const [ workData , setworkData] =useState(TesimonialReviw);
    console.log(workData);
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        margin:30,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
    return(
        <>
           <div className="testimonal-sec pt-5 position-relative">
               <div className="container">
                    <h6 className="text-center" data-aos="fade-down"> <span></span> Testimonal </h6>
                    <h2 className="text-center" data-aos="fade-up">What Our Wine-Lovers Say </h2>
                    <div className="silder-div-text mt-5 pb-5" data-aos="fade-down">
                        <div className="w-100 overflow-hidden">
                          <Slider {...settings}>
                            {
                                workData.map((curElem) =>{
                                    const { id, name, decription, location} = curElem;
                                    return(
                                        <>
                                        <div className="item d-inline-block w-100 m-auto">
                                            <div className="insideu-div d-inline-block w-100">
                                                <div className="comon-div-ts">
                                                    <h5> "{decription}"</h5>
                                                    <span className="start">
                                                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                                    </span>
                                                    
                                                </div>

                                                <div  className="d-flex mt-4 ">
                                                
                                                <h4> {name} <span className="d-block"> {location}  </span>  </h4>
                                            
                                                </div>
                                            </div>

                                        </div>
                                        </>
                                    );
                                })
                            }
                            </Slider>
                        </div>
                    </div>
               </div>

               <div className="tesimonial-sec-div">
                    <figure>
                        <img src="images/602220dceb0d5d0021b07740_optimized_740_c711x1076-6x22.webp" alt="pic"/>
                    </figure>
                </div>
           </div>
        </>
    );
}
export default Testimonial;