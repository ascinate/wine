import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Teammember from "./TeamApi";

function AboutpageSectionfive(){
    const [ workData , setworkData] =useState(Teammember);
    console.log(workData);
    const settings = {
        dots: true,
        infinite: true,
        nav:false,
        margin:30,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
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
          <div className="our-staff py-5">
              <div className="container">
                 <h6 className="text-center"> Our Staff </h6>
                 <h2 className="text-center"> Meet our team Member </h2>
                 <div className="team-slide mt-5">
                     
                    <Slider {...settings}>

                        {
                            workData.map((curElem) =>{
                                const { id, images, name, jobpostion} = curElem;
                                return(
                                    <>
                                    <div className="team-item text-center  m-auto">
                                        <figure>
                                           <img src={images} alt={name}/>
                                        </figure>
                                        <h5 className="my-3"> {name} </h5>
                                        <h6> {jobpostion} </h6>
                                      
                                    </div>
                                    </>
                                );
                            })
                        }

                    </Slider>

                 </div>
              </div>
          </div>
        </>
    );
}
export default AboutpageSectionfive;