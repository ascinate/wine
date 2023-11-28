import React, {useEffect} from "react";
import Banner from "./components/Banner";
import OfferHome from "./components/OfferHome";
import BestsellingHome from "./components/BestsellingHome";
import Whychoose from "./components/Whychoose";
import FeaturedProdcuts from "./components/FeaturedProdcuts";
import Testimonial from "./components/Testimonial";
import BlogHome from "./components/BlogHome";
import { NavLink } from "react-router-dom";
import WhychooseHome from "./components/WhychooseHome";
import OfferHomeSection from "./components/OfferHomeSection";


function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vintagewine - Home"
    return (
        <div>
           <Banner/>
           <section className="total-body pt-5 d-block">
               <OfferHome/>
               <BestsellingHome/>
                <WhychooseHome/>
                <Whychoose/>
                <FeaturedProdcuts/>
                <OfferHomeSection/>
                <Testimonial/>
                <BlogHome/>
           </section>
        </div>
    );
}
export default Home;