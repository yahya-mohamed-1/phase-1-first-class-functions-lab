const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers() {
    return drivers.slice(2)
}


let selectingDrivers = [returnFirstTwoDrivers]
selectingDrivers.push(returnLastTwoDrivers)

function createFareMultiplier(fareMultiplier) {
    return function (value) {
        return value * fareMultiplier;
    };
}

function fareDoubler(n) {
    return n * 2
}

function fareTripler(n) {
    return n * 3
}

function selectDifferentDrivers(arrayOfDrivers, anyFunction) {
    return anyFunction(arrayOfDrivers)
}