"use strict";
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(el) {
        el.textContent = `${this.name} has a rainfall of ${this.rainLevel} inches.`;
        return el;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(el) {
        el.textContent = `${this.name} has a snowfall of ${this.snowLevel} inches.`;
        return el;
    }
}
class IslandCountry {
    constructor(name, landsize) {
        this.name = name;
        this.landSize = landsize;
    }
    getInfo(el) {
        el.textContent = `${this.name} has a rainfall of ${this.landSize} inches.`;
        return el;
    }
}
// Check if a country is a snowyCountry
// Returns the snowyCountry if true, null otherwise
function GetSnowyCountry(country) {
    if ('snowLevel' in country) {
        return country;
    }
    return null;
}
// Creates a div element with info from given countries with header
function AddCountriesToElement(element, header, lines, elementClass) {
    const div = document.createElement("div");
    div.className = elementClass;
    const title = document.createElement("h2");
    title.textContent = header;
    div.appendChild(title);
    let line;
    for (let i = 0; i < lines.length; i++) {
        line = document.createElement("p");
        line.className = "country-info";
        lines[i].getInfo(line);
        div.appendChild(line);
    }
    element.appendChild(div);
}
// Extracts snowy countries from a given list of countries
function GetSnowyCountries(countries) {
    let snowyCountriesList = [];
    let country;
    for (let i = 0; i < countries.length; i++) {
        country = GetSnowyCountry(countries[i]);
        if (country) {
            snowyCountriesList.push(country);
        }
    }
    return snowyCountriesList;
}
function CalculateTotalSnowfall(snowyCountries) {
    let total = 0;
    for (let country of snowyCountries) {
        total += country.snowLevel;
    }
    return total;
}
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464),
    new RainyCountry("South Korea", 28),
    new SnowyCountry("Russia", 20),
    new RainyCountry("Chile", 40),
    new SnowyCountry("Canada", 130)
];
// Add elements to DOM 
const rootElement = document.getElementById("output");
AddCountriesToElement(rootElement, "All Countries", countries, "all-countries");
const snowyCountriesList = GetSnowyCountries(countries);
AddCountriesToElement(rootElement, "Snowy Countries", snowyCountriesList, "snowy-countries");
const snowyTotalElement = document.createElement("p");
snowyTotalElement.innerText = `Total snow level: ${CalculateTotalSnowfall(snowyCountriesList)} inches.`;
rootElement.appendChild(snowyTotalElement);
