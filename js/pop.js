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
//nyc
var ny2010 = 8190000;
var ny2011 = 8273000;
var ny2012 = 8344000;
//miami
var miami2010 = 400769;
var miami2011 = 410559;
var miami2012 = 414221;
//san jose
var jose2010 = 955264;
var jose2011 = 970011;
var jose2012 = 982579;
// la
var la2010 = 3796000;
var la2011 = 3821000;
var la2012 = 3853000;

var year = parseInt(document.getElementById("inputYear").value);

// miami
//
//  finds the slope
function findSlopemi(a, miami2010, b, miami2011, c, miami2012) {
    m1 = (miami2011 - miami2010) / (b - a);
    m2 = (miami2012 - miami2011) / (c - b);
    avg = (m1 + m2) / 2;
    return avg;
};
var avgmi = findSlopemi(a, miami2010, b, miami2011, c, miami2012);

//  finds y intercept
function findYmiami(avg, a, miami2010) {
    d = miami2010 - (avg * a);

    return d;
}

// sets vars from funcs
var yimi = findYmiami(avgmi, a, miami2010);

function formulami(year, avgmi, yimi) {
    var pop = yimi + (avgmi * year);
    return pop;
}
// shows the deporation rate along with the new population
function trumpEffectmi(year, avgmi, yimi) {
    if (year >= 2016) {
        var pop = yimi + (avgmi * year);
        var dpop = pop * 0.98;
        return dpop;
    } else {
        dpop = formulami(year, avgmi, yimi);
        return dpop;
    }
}

// NYC
//  finds the slope
function findSlopeny(a, ny2010, b, ny2011, c, ny2012) {
    m1 = (ny2011 - ny2010) / (b - a);
    m2 = (ny2012 - ny2011) / (c - b);
    avg = (m1 + m2) / 2;
    return avg;
};
var avgny = findSlopeny(a, ny2010, b, ny2011, c, ny2012);

//  finds y intercept
function findYny(avgny, a, ny2010) {
    d = ny2010 - (avgny * a);

    return d;
}

// sets vars from funcs
var yiny = findYny(avgny, a, ny2010);

function formulany(year, avgny, yiny) {
    var pop = yiny + (avgny * year);
    return pop;
}
// shows the deporation rate along with the new population
function trumpEffectny(year, avgny, yiny) {
    if (year >= 2016) {
        var pop = yiny + (avgny * year);
        var dpop = pop * 0.98;
        return dpop;
    } else {
        dpop = formulany(year, avgny, yiny);
        return dpop;
    }
}
// san jose
//
function findSlopesj(a, jose2010, b, jose2011, c, jose2012) {
    m1 = (jose2011 - jose2010) / (b - a);
    m2 = (jose2012 - jose2011) / (c - b);
    avg = (m1 + m2) / 2;
    return avg;
};
var avgsj = findSlopesj(a, jose2010, b, jose2011, c, jose2012);

//  finds y intercept
function findYsj(avgsj, a, jose2010) {
    d = jose2010 - (avgsj * a);

    return d;
}

// sets vars from funcs
var yisj = findYsj(avgsj, a, jose2010);

function formulasj(year, avgsj, yisj) {
    var pop = yisj + (avgsj * year);
    return pop;
}
// shows the deporation rate along with the new population
function trumpEffectsj(year, avgsj, yisj) {
    if (year >= 2016) {
        var pop = yisj + (avgsj * year);
        var dpop = pop * 0.98;
        return dpop;
    } else {
        dpop = formulasj(year, avgsj, yisj);
        return dpop;
    }
}
//
// LA
function findSlopesj(a, la2010, b, la2011, c, la2012) {
    m1 = (la2011 - la2010) / (b - a);
    m2 = (la2012 - la2011) / (c - b);
    avg = (m1 + m2) / 2;
    return avg;
};
var avgla = findSlopesj(a, la2010, b, la2011, c, la2012);

//  finds y intercept
function findYla(avgla, a, la2010) {
    d = la2010 - (avgla * a);

    return d;
}

// sets vars from funcs
var yila = findYla(avgla, a, la2010);

function formulala(year, avgla, yila) {
    var pop = yila + (avgla * year);
    return pop;
}
// shows the deporation rate along with the new population
function trumpEffectla(year, avgla, yila) {
    if (year >= 2016) {
        var pop = yila + (avgla * year);
        var dpop = pop * 0.98;
        return dpop;
    } else {
        dpop = formulala(year, avgla, yila);
        return dpop;
    }
}
console.log("code is running");
/*
// ny
document.getElementById("result").innerHTML = "The estimated population without trump is " + formula(year, avg, yiny);
document.getElementById("tEffect").innerHTML = "The population with trump is " + trumpEffect(year, avg, yiny);
//miami
document.getElementById("result").innerHTML = "The estimated population without trump is " + formula(year, avg, yimi);
document.getElementById("tEffect").innerHTML = "The population with trump is " + trumpEffect(year, avg, yimi);
*/
