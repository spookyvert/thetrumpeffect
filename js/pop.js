/*
powered by Bronx Academy for Engineering Students

Huberto Martinez

Shemar  Dacosta

Eram Manasia

Fredi Ramirez

Franklin Benjamin


 */

// Population Info
var a = 2010;
var b = 2011;
var c = 2012;
var ap = 8190000;
var bp = 8273000;
var cp = 8344000;
var year = parseInt(document.getElementById("inputYear").value);

//  finds the slope
function findSlope(a, ap, b, bp, c, cp) {
    m1 = (bp - ap) / (b - a);
    m2 = (cp - bp) / (c - b);
    avg = (m1 + m2) / 2;
    return avg;
};
var avg = findSlope(a, ap, b, bp, c, cp);

//  finds y intercept
function findY(avg, a, ap) {
    d = ap - (avg * a);

    return d;
}

// sets vars from funcs
var yi = findY(avg, a, ap);

function formula(year, avg, yi) {
    var pop = yi + (avg * year);
    return pop;
}
// shows the deporation rate along with the new population
function trumpEffect(year, avg, yi) {
    if (year >= 2016) {
        var pop = yi + (avg * year);
        var dpop = pop * 0.98;
        return dpop;
    } else {
        dpop = formula(year, avg, yi);
        return dpop;
    }
}
console.log("code is running");

document.getElementById("result").innerHTML = "The estimated population without trump is " + formula(year, avg, yi);
document.getElementById("tEffect").innerHTML = "The population with trump is " + trumpEffect(year, avg, yi);
