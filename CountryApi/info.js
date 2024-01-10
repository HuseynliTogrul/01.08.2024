"use strict";

const countryInfo = document.querySelector(".countryInfo")

filteredCountries.forEach((country) => {
    countryInfo.innerHTML += `<div class="country-img">
                    <img src="./assets/images/germany.png" alt="">
                    </div>
                    <div class="country-info">
                    <h3>Germany</h3>
                    <div class="info">
                        <div class="info-left">
                            <ul>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                            </ul>
                        </div>
                        <div class="info-right">
                            <ul>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                                <Li>Native name:</Li>
                            </ul>
                        </div>
                    </div>
                    <div class="info-border">
                        <h4>border:</h4>
                        <div class="borderBtn">
                            <button>France</button>
                            <button>France</button>
                            <button>France</button>
                        </div>
                    </div>
                    </div>`
})