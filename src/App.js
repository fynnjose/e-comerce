
import './App.css';
import './Component/Product.css'
import './Component/Toolbar.css'
import './Component/Discoverybox.css'
import './Component/Imageslide.css'
import './Component/SpecialOffers.css'
import './Component/Testimonial.css'
import BestSellerProduct from './Component/BestSellerProduct';
import PopularProduct from './Component/Popular_Product';
import Product from './Component/Product';
import NavBar from './Component/NavBar';
import ToolBarLeft from './Component/Toolbar_Left';
import ToolBarRight from './Component/Toobar_Right';
import Discovery from './Component/Discovery';
import Slide from './Component/Slides';
import Trending from './Component/Trending';
import Fruit from './Component/Fruit';
import BestSeller from './Component/BestSeller';
import Offers from './Component/Offers';
import BestSellerProduct2 from './Component/Best_seller_product_2';
import SpecialOfferItem1 from './Component/SpecialOfferItem1';
import SpecialOfferItem2 from './Component/SpecialOfferItem2';
import ClientTestimonial from './Component/ClientTestimonial';
import TestimonialDp from './Component/TestimonialDp';
import TestimonialWords from './Component/TestimonialWords';
import Rating from './Component/Rating';
import BlogArticle from './Component/BlogArticle';
import Blog from './Component/Blog';

function App() {



  return (
    <div className="container">
      <NavBar />

      <div className="toolbar">
        <ToolBarLeft />
        <ToolBarRight />
      </div>

      <div className="discoverybox">
        <Discovery />
        <div class="carosel"></div>
      </div>

      <div className="imageslide ">
        <span> <img src={require("./appimages/lRarrow.png")} id="larrow" alt="left arrow" /> </span>
        <Slide />

        <span><img src={require("./appimages/rArrow.png")} id="rarrow" alt="rigth arrow" /></span>
      </div>

      <div className="products">
        <PopularProduct />
        <Product />
      </div>

      <Trending />

      <Fruit />

      <div className='best_seller'>
        <BestSeller />
        <BestSellerProduct />
      </div>

      <Trending />

      <Offers />

      <BestSellerProduct2 />

      <div class="specialoffers">
        <SpecialOfferItem1 />
        <SpecialOfferItem2 />
      </div>

      <ClientTestimonial />

      <div className="testimonial">
        <TestimonialDp />
        <TestimonialWords />
        <Rating />
      </div>

      <div className='blog'>
        <BlogArticle />
        <Blog />
      </div>

    </div>

  );
}

export default App;
