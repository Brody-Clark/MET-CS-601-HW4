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
function GetSnowyCountry(country) {
    if ('snowLevel' in country) {
        return country;
    }
    return null;
}
function AddCountriesToElement(element, header, lines) {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    div.appendChild(title);
    title.textContent = header;
    let line;
    for (let i = 0; i < lines.length; i++) {
        line = document.createElement("p");
        lines[i].getInfo(line);
        div.appendChild(line);
    }
    element.appendChild(div);
}
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
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
// Add elements to DOM 
const rootElement = document.getElementById("output");
AddCountriesToElement(rootElement, "All Countries", countries);
const snowyCountriesList = GetSnowyCountries(countries);
AddCountriesToElement(rootElement, "Snowy Countries", snowyCountriesList);
