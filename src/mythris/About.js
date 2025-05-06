import React from "react";
import Three from '../images/three.jpg';
import './about.css'

export default function About() {
    return (
        <>
            <div class="aboutpage">
                <div class="card" >

                    <div class="container">
                        <img src={Three} alt="Notebook" Class="image" />
                        <div class="content">
                            <h1>History Of Mythri's Indian Cuisine</h1>
                            <p>You don't have to travel the globe to give your taste buds a vacation! Once you step inside Mythris, warm hospitality, elegant decor, and enticing aromas will transport you to the fine eateries of India.</p>
                            <p>As an Indian food-lover’s dream, Mythris’s food is prepared using the finest seasonal ingredients by our specially trained chefs. Our food has the ability to delight your sense of taste and leave you feeling content. Our menu features a large range of snacks, meals, and delicious desserts prepared in separate vegetarian and non-vegetarian kitchens. Stop by Mythris today to experience authentic south Indian Cuisine and authentic Indian culture today!</p>
                            <p>An Indian food-lover’s dream, Mythris’s food is prepared for you using the finest seasonal ingredients in separate vegetarian and non-vegetarian kitchens by our specially trained chefs. Good food has the ability to delight your sense of taste and leave you happier. Our menu features a large range of vegetables, meats and delicious desserts from India’s rich culture including authentic south Indian cuisine that tastes like it came straight from India.</p>

                        </div>
                    </div>

                </div>
            </div>
           
        </>
    )
}
