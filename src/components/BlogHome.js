import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import recentpost from "./RecentlblogApi";
import { FaUser, FaTags, autor} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function BlogHome(){
    const [ workData , setworkData] =useState(recentpost);
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
        dots: true,
        infinite: true,
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
            <div className="news-sec-div py-5">
                 <div className="container">
                    <h6 className="text-center" data-aos="fade-down"> <span></span> News & Articles </h6>
                    <h2 className="text-center" data-aos="fade-up"> Our Latest Blogs </h2>
                    <div className="news-sec-div-part mt-5" data-aos="fade-down">
                         
                       <Slider {...settings}>
                            {
                                workData.map((curElem) =>{
                                    const { id, repostimg, cate, autor, postmonth, decription, postdate, reposttitel, repostlink} = curElem;
                                    return(
                                        <>
                                        <div className="item">
                                            <div className="comon-news-part">
                                                <div className="comon-pic-news">
                                                    <figure className="position-relative">
                                                    <NavLink to="/"> <img src={repostimg} alt="picb"/> </NavLink>
                                                    </figure>
                                                    <div className="date-text"> {postdate} <span className="d-block"> {postmonth} </span> </div>
                                                </div>
                                                <div className="dtails-idv-text">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <NavLink to="/blog"> <FaUser/> {autor} </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/blog"> <FaTags/> 
                                                        {cate} </NavLink>
                                                    </li>
                                                </ul>
                                                <h5> {reposttitel} </h5>
                                                <p> {decription} </p>
                                                <NavLink to={repostlink} className="btn read-more-bn text-uppercase"> read more </NavLink>
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
        </>
    );
}
export default BlogHome;