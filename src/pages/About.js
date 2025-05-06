import React from "react";
import Layout from "./../components/Layout/Layout";
import "./About.css";
import One from "../images/1.jpg";
import Two from "../images/2.jpg";
import Three from "../images/3.jpg";
import Four from "../images/4.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="Adds">
      <div className="menu-main">
          <h2>About Us</h2>
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
      </div>
    </Layout>
  );
};

export default About;
