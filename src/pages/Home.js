import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { Carousel } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Dosa from "../images/1b.png";
import Biryani from "../images/2b.png";
import Seafood from "../images/3b.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from "../images/F1.jpg";
import F2 from "../images/F2.jpg";
import F3 from "../images/F3.jpg";
import F4 from "../images/F4.jpg";
import F5 from "../images/F5.jpg";
import F6 from "../images/F6.jpg";
import F7 from "../images/F7.jpg";
import F8 from "../images/F8.jpg";
import F9 from "../images/F9.jpg";
import One from "../images/1.jpg";
import Two from "../images/2.jpg";
import Three from "../images/3.jpg";
import Four from "../images/4.jpeg";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Width below 1024px
        settings: {
          slidesToShow: 2,  // Show 2 slides on tablets
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // Width below 600px
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <Layout>

      <div >
        <Carousel>
          <Carousel.Item interval={1000}>
            <div className="images">

              <img src={Dosa} alt=""></img>


            </div>
            <Carousel.Caption>
              <section className="home" id="home">
                <div className="content">
                  <h4 style={{ color: "white !important" }}>Welcome to Mythri's Indian Cuisine</h4>
                  <h3>Start your Morning with <br />Delicious Breakfast!</h3>
                  <p>It is our great pleasure to introduce to you the varied tastes of glorious India. You don't have to trot the globe to give your taste buds a vacation!</p>
                </div>
              </section>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="images">
              <img src={Biryani} alt=""></img>
            </div>
            <Carousel.Caption>

              <section className="home" id="home">
                <div className="content">
                  <h4>Welcome to Mythri's Indian Cuisine</h4>
                  <h3>Authentic Biryani available <br />at Mythri's</h3>
                  <p>It is our great pleasure to introduce to you the varied tastes of glorious India. You don't have to trot the globe to give your taste buds a vacation!</p>
                </div>
              </section>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="images">
              <img src={Seafood} alt=""></img>
            </div>
            <Carousel.Caption>
              <section className="home" id="home">
                <div className="content">
                  <h4>Welcome to Mythri's Indian Cuisine</h4>
                  <h3>Delicious Indian Fresh <br />Sea Food</h3>
                  <p>It is our great pleasure to introduce to you the varied tastes of glorious India. You don't have to trot the globe to give your taste buds a vacation!</p>
                </div>
              </section>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="highlights ">
        <div class="grid-container">
          <div className="container">
            <div className="text-content" >
              <div class="content">
                <h2>A History Has Written For Mythri's Indian Cuisine Explore more Our Story</h2>
                <p >
                  You don't have to travel the globe to give your taste buds a vacation! Once you step inside Mythris, warm hospitality, elegant decor, and enticing aromas will transport you to the fine eateries of India
                </p>
                <p>
                  As an Indian food-lover’s dream, Mythris’s food is prepared using the finest seasonal ingredients by our specially trained chefs. Our food has the ability to delight your sense of taste and leave you feeling content. Our menu features a large range of snacks, meals, and delicious desserts prepared in separate vegetarian and non-vegetarian kitchens. Stop by Mythris today to experience authentic south Indian Cuisine and authentic Indian culture today!
                </p>
                <p>
                  It is our great pleasure to introduce to you the varied tastes of glorious India. You don't have to trot the globe to give your taste buds a vacation! Once you step inside, our elegant decor, warm hospitality and enticing aromas will transport you to the fine eateries of India. Once you step inside, our elegant decor, warm hospitality and enticing aromas will transport you to the fine eateries of India
                </p>
                An Indian food-lover’s dream, Mythris’s food is prepared for you using the finest seasonal ingredients in separate vegetarian and non-vegetarian kitchens by our specially trained chefs. Good food has the ability to delight your sense of taste and leave you happier. Our menu features a large range of vegetables, meats and delicious desserts from India’s rich culture including authentic south Indian cuisine that tastes like it came straight from India.
              </div>
            </div>
          </div>
          <div class="image">
            <img src={One} alt="" class="responsive-image" />
            <img src={Two} alt="" class="responsive-image" />
            <img src={Three} alt="" class="responsive-image" />
            <img src={Four} alt="" class="responsive-image" />
          </div>
        </div>
      </div>
      <div className="BestThings">
        <div class="card-container1">
          <div class="card1">

            <h3>Best FoodQuality</h3>
            <p>High-quality foods include unrefined, minimally processed foods such as vegetables and fruits, whole grains, healthy fats and healthy sources of protein – the foods recommended in the Healthy Eating Plate.</p>
          </div>
          <div class="card1">
            <h3>Magical Atmosphere</h3>
            <p>A good ambience is made up of perfectly adjusted lights that serve the purpose of both, utility and creating a certain mood.</p>
          </div>
          <div class="card1">
            <h3>Low Costing Food</h3>
            <p>With proper menu planning, sales forecasting and employee training, a restaurant can prevent overspending on staff and supplies and still provide excellent quality dishes and service</p>
          </div>
        </div>
      </div>

      <div className="food-slider-section">

        <div className="containers">
          <div className="row ">
            <div className="column food-slide-col">
              <h2 className="food-slide-head">
                Check Our <span class="about-span-head">Delicious Menu</span>
              </h2>
              <p className="food-slide-para">Good Food is the Foundation of Genuine Happiness</p>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img src={F1} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F2} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F7} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F4} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F5} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F6} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F3} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F8} alt=" " className="foodsImg" />
                  </div>
                  <div>
                    <img src={F9} alt=" " className="foodsImg" />
                  </div>
                </Slider>
              </div>


            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Home;
