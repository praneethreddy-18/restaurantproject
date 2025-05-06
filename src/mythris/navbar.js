import React from "react";
import logo from './mythris-logo.png';
import Three from '../images/three.jpg';
import 'primeicons/primeicons.css';
import './mythris.css';
import './about.css';
export default function navbar() {
    return (
        <div class="totalPages">
            <div class="Nav">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/#"><img src={logo} alt=""></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="/#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#About">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item " href="#">Soups</a></li>
                                        <li><a class="dropdown-item" href="#">Appetizers</a></li>
                                        <li><a class="dropdown-item" href="#">South Indian</a></li>
                                        <li><a class="dropdown-item" href="#">Dosas</a></li>
                                        <li><a class="dropdown-item" href="#">Entrees</a></li>
                                        <li><a class="dropdown-item" href="#">Sea Food</a></li>
                                        <li><a class="dropdown-item" href="#">Tandoori</a></li>
                                        <li><a class="dropdown-item" href="#">Roti Bread</a></li>
                                        <li><a class="dropdown-item" href="#">Biryani</a></li>
                                        <li><a class="dropdown-item" href="#">Pulaos</a></li>
                                        <li><a class="dropdown-item" href="#">Indo Chineese</a></li>
                                        <li><a class="dropdown-item" href="#">Desserts</a></li>
                                        <li><a class="dropdown-item" href="#">Beverages</a></li>
                                        <li><a class="dropdown-item" href="#">Sides</a></li>
                                        <li><a class="dropdown-item" href="#">Kids Menu</a></li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Gallery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href={Three}>Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="https://mythris.smartonlineorder.com/">Order</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active" href="https://www.doordash.com/store/mythri-s-indian-cuisine-irving-1340878/en-US">Delivery</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class='HomePage'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <section className="home" id="home">
                                <div className="content">
                                    <h3>
                                        Welcome to <span>MYTHRI's</span> Indian Cuisine
                                    </h3>
                                    <p>
                                        It is our great pleasure to introduce to you the varied tastes of glorious USA.
                                        You don't have to trot the globe to give your taste buds a vacation!
                                    </p>


                                </div>

                            </section>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/71/7e/ff/717effc7d39cb9b9f9190dcda2937cf9.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Three} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
               
            </div>
        </div >
    )
}