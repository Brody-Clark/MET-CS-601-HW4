var RainyCountry = /** @class */ (function () {
    function RainyCountry(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    RainyCountry.prototype.getInfo = function (el) {
        el.textContent = "".concat(name, " has a rainfall of ").concat(this.rainLevel, " inches.");
        return el;
    };
    return RainyCountry;
}());
var SnowyCountry = /** @class */ (function () {
    function SnowyCountry(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    SnowyCountry.prototype.getInfo = function (el) {
        el.textContent = "".concat(this.name, " has a snowfall of ").concat(this.snowLevel, " inches.");
        return el;
    };
    return SnowyCountry;
}());
var IslandCountry = /** @class */ (function () {
    function IslandCountry(name, landsize) {
        this.name = name;
        this.landSize = landsize;
    }
    IslandCountry.prototype.getInfo = function (el) {
        el.textContent = "".concat(this.name, " has a rainfall of ").concat(this.landSize, " inches.");
        return el;
    };
    return IslandCountry;
}());
function GetSnowyCountry(country) {
    if ('snowLevel' in country) {
        return country;
    }
    return null;
}
function AddCountriesToElement(element, header, lines) {
    var title = document.createElement("h2");
    title.textContent = header;
    var line;
    for (var i = 0; i < lines.length; i++) {
        line = document.createElement("p");
        line.textContent = lines[i].name;
        title.appendChild(line);
    }
    element.appendChild(title);
}
function GetSnowyCountries(countries) {
    var snowyCountriesList = [];
    var country;
    for (var i = 0; i < countries.length; i++) {
        country = GetSnowyCountry(countries[i]);
        if (country) {
            snowyCountriesList.push(country);
        }
    }
    return snowyCountriesList;
}
// Sample data
var countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
// Add elements to DOM 
var rootElement = document.getElementById("output");
AddCountriesToElement(rootElement, "All Countries", countries);
var snowyCountriesList = GetSnowyCountries(countries);
AddCountriesToElement(rootElement, "Snowy Countries", snowyCountriesList);
