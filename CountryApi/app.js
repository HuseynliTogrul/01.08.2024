"use strict";

const countries = [
    {
        name: "Germany",
        capital: "Berlin",
        region: "Europe",
        population: 83240525,
        flag: "https://flagcdn.com/sc.svg"
    },
    {
        name: "United States of America",
        capital: "Washington, D.C.",
        region: "Americas",
        population: 329484123,
        flag: "https://flagcdn.com/us.svg"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        region: "Americas",
        population: 212559409,
        flag: "https://flagcdn.com/br.svg"
    },
    {
        name: "Iceland",
        capital: "Reykjavík",
        region: "Europe",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        name: "Afghanistan",
        capital: "Kabul",
        region: "Asia",
        population: 40218234,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        region: "Europe",
        population: 28875,
        flag: "https://flagcdn.com/sm.svg"
    },
    {
        name: "Albania",
        capital: "Tirana",
        region: "Europe",
        population: 2837743,
        flag: "https://flagcdn.com/al.svg"
    },
    {
        name: "Algeria",
        capital: "Algiers",
        region: "Africa",
        population: 44700000,
        flag: "https://flagcdn.com/dz.svg"
    }
]

const headerRight = document.querySelector(".header-right")
// const worldHeader = document.querySelector(".world-header")
const inputLeft = document.querySelector(".input-left input")
const worldFlags = document.querySelector(".world-flags")

const element = document.body;

headerRight.addEventListener("click", () => {
    element.classList.toggle("dark-mode");
    // worldHeader.classList.toggle("dark-mode");
})

inputLeft.addEventListener("input", () => {
    const givenValue = inputLeft.value.trim()
    console.log(givenValue);

});
countries.forEach((country) => {
    worldFlags.innerHTML += `<div class="world">
                    <div class= "world-img">
                        <img src="${country.flag}" alt="">
                    </div>
                    <div class="world-info-name">
                        <div class="world-name">
                            ${country.name}
                        </div>
                        <div class="world-info">
                            <ul>
                                <li>Population: <span>${country.population}</span></li>
                                <li>Region: <span>${country.region}</span></li>
                                <li>Capital: <span>${country.capital}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>`
})
