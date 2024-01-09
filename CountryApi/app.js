"use strict";

const headerRight = document.querySelector(".header-right")
const inputLeft = document.querySelector(".input-left input")
const worldFlags = document.querySelector(".world-flags")

const filterBtn = document.querySelector(".filterBtn")
const filterChevron = document.querySelector(".filterBtn i")
const filterList = document.querySelector(".filterList")

const filterRegionList = document.querySelectorAll(".filterList li")

const searchInput = document.querySelector("#searchInput")

let countries;

filterBtn.addEventListener("click", () => {
    // filterChevron.style.transform = "rotate(180deg)"
    filterList.classList.toggle("hidden")
})

// headerRight.addEventListener("click", () => {
//     html.classList.toggle("dark");
// })

const getCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()

    countries = data
    displayCountries(countries)
}

getCountries()

const displayCountries = (countries) => {
    worldFlags.innerHTML = ""
    countries.forEach((country) => {

        if (country.name.common === "Armenia") {
            return
        }

        worldFlags.innerHTML += `<div class="world">
                        <div class= "world-img">
                            <a href="./info.html">
                                <img src="${country.flags.png}" alt="">
                            </a>
                        </div>
                        <div class="world-info-name">
                            <div class="world-name">
                                ${country.name.common}
                            </div>
                            <div class="world-info">
                                <ul>
                                    <li>Population: <span>${country.population}</span></li>
                                    <li>Region: <span>${country.region}</span></li>
                                    <li>Capital: <span>${country.capital ? country.capital : 'Not defined'}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>`
    })

}

const searchCountry = () => {
    const givenValue = searchInput.value.trim().toLowerCase();
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(givenValue)
    )

    displayCountries(filteredCountries)
    searchInput.value = ""
}

searchInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        searchCountry()
    }
})

filterRegionList.forEach((regionList) => {
    regionList.addEventListener("click", () => {
        const { region } = regionList.dataset;
        filterList.classList.add("hidden")
        console.log(region);
        const filteredRegion = countries.filter((country) => country.region === region)

        displayCountries(filteredRegion)
    })
});