/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
interface ICountry {
    name: string;
    getInfo(el: HTMLElement): HTMLElement;
}

class RainyCountry implements ICountry {
    name: string;
    rainLevel: number;
    constructor(name: string, rainLevel: number) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(el: HTMLElement): HTMLElement {
        el.textContent = `${this.name} has a rainfall of ${this.rainLevel} inches.`;
        return el;
    }
}

class SnowyCountry implements ICountry {
    constructor(name: string, snowLevel: number) {
        this.name = name;
        this.snowLevel = snowLevel
    }
    name: string;
    snowLevel: number;
    getInfo(el: HTMLElement): HTMLElement {
        el.textContent = `${this.name} has a snowfall of ${this.snowLevel} inches.`;
        return el;
    }
}

class IslandCountry implements ICountry {
    name: string;
    landSize: number;
    constructor(name: string, landsize: number) {
        this.name = name;
        this.landSize = landsize;
    }
    getInfo(el: HTMLElement): HTMLElement {
        el.textContent = `${this.name} has a rainfall of ${this.landSize} inches.`;
        return el;
    }
}

// Check if a country is a snowyCountry
// Returns the snowyCountry if true, null otherwise
function GetSnowyCountry(country: ICountry) {

    if ('snowLevel' in country) {
        return country as SnowyCountry;
    }
    return null;

}

// Creates a div element with info from given countries with header
function AddCountriesToElement(element: HTMLElement, header: string, lines: ICountry[], elementClass: string) {
    const div: HTMLDivElement = document.createElement("div");
    div.className = elementClass;
    const title: HTMLElement = document.createElement("h2");
    title.textContent = header;

    div.appendChild(title);

    let line: HTMLParagraphElement;
    for (let i = 0; i < lines.length; i++) {
        line = document.createElement("p");
        line.className = "country-info";
        lines[i].getInfo(line);
        div.appendChild(line);
    }

    element.appendChild(div);
}

// Extracts snowy countries from a given list of countries
function GetSnowyCountries(countries: ICountry[]) {
    let snowyCountriesList: SnowyCountry[] = [];
    let country: any;
    for (let i = 0; i < countries.length; i++) {
        country = GetSnowyCountry(countries[i])
        if (country) {
            snowyCountriesList.push(country as SnowyCountry);
        }
    }
    return snowyCountriesList;
}
function CalculateTotalSnowfall(snowyCountries: SnowyCountry[]): number {
    let total = 0;
    for (let country of snowyCountries) {
        total += country.snowLevel;
    }
    return total;
}

// Sample data
const countries: ICountry[] = [
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
const rootElement = document.getElementById("output") as HTMLElement;
AddCountriesToElement(rootElement, "All Countries", countries, "all-countries");
const snowyCountriesList = GetSnowyCountries(countries);
AddCountriesToElement(rootElement, "Snowy Countries", snowyCountriesList, "snowy-countries");
const snowyTotalElement = document.createElement("p") as HTMLParagraphElement;
snowyTotalElement.innerText = `Total snow level: ${CalculateTotalSnowfall(snowyCountriesList)} inches.`;
rootElement.appendChild(snowyTotalElement);