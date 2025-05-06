import React from 'react';
import CFC from './cfc.jpeg';
import NavigationBar from './navigationBar';
export default function menu() {
    return (
        <div>
            <NavigationBar/>
            <div class="menu">
                <div class="w3-row ">
                    <div class="w3-quarter w3-container">
                        <div>
                            <div class="w3-container">
                                <div class="w3-card-4" >
                                    <img src={CFC} alt="Alps" />
                                    <div class="w3-container w3-center">
                                        <p>The Italian / Austrian Alps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w3-quarter w3-container">
                        <div>
                            <div class="w3-container">
                                <div class="w3-card-4" >
                                    <img src={CFC} alt="Alps" />
                                    <div class="w3-container w3-center">
                                        <p>The Italian / Austrian Alps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w3-quarter w3-container">
                        <div>
                            <div class="w3-container">
                                <div class="w3-card-4" >
                                    <img src={CFC} alt="Alps" />
                                    <div class="w3-container w3-center">
                                        <p>The Italian / Austrian Alps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w3-quarter w3-container">
                        <div>
                            <div class="w3-container">
                                <div class="w3-card-4" >
                                    <img src={CFC} alt="Alps" />
                                    <div class="w3-container w3-center">
                                        <p>The Italian / Austrian Alps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w3-quarter w3-container">
                        <div>
                            <div class="w3-container">
                                <div class="w3-card-4" >
                                    <img src={CFC} alt="Alps" />
                                    <div class="w3-container w3-center">
                                        <p>The Italian / Austrian Alps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}