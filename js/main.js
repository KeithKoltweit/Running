// variables gather info from training tables and text from class buttons
var fivekButton = document.querySelector(".fivek-button");
var tenkButton = document.querySelector(".tenk-button");
var tenmilerButton = document.querySelector(".tenmiler-button");
var halfButton = document.querySelector(".half-button");
var fullButton = document.querySelector(".full-button");
var fivekSchedule = document.querySelector(".fivek-schedule");
var tenkSchedule = document.querySelector(".tenk-schedule");
var tenmilerSchedule = document.querySelector(".tenmiler-schedule");
var halfSchedule = document.querySelector(".half-schedule");
var fullSchedule = document.querySelector(".full-schedule");

/* schedules for distances */
// functions work with css file to show and hide tables
function show5K() {
    fivekSchedule.className = "fivek-schedule show"; //show 5k schedule
    tenkSchedule.className = "tenk-schedule";
    tenmilerSchedule.className = "tenmiler-schedule";
    halfSchedule.className = "half-schedule";
    fullSchedule.className = "full-schedule";
}

function show10K() {
    fivekSchedule.className = "fivek-schedule";
    tenkSchedule.className = "tenk-schedule show"; //show 10k schedule
    tenmilerSchedule.className = "tenmiler-schedule";
    halfSchedule.className = "half-schedule";
    fullSchedule.className = "full-schedule";
}

function show10miler() {
    fivekSchedule.className = "fivek-schedule";
    tenkSchedule.className = "tenk-schedule";
    tenmilerSchedule.className = "tenmiler-schedule show"; //show 10 miler schedule
    halfSchedule.className = "half-schedule";
    fullSchedule.className = "full-schedule";
}

function showHalf() {
    fivekSchedule.className = "fivek-schedule ";
    tenkSchedule.className = "tenk-schedule";
    tenmilerSchedule.className = "tenmiler-schedule";
    halfSchedule.className = "half-schedule show"; //show half marathon schedule
    fullSchedule.className = "full-schedule";
}

function showFull() {
    fivekSchedule.className = "fivek-schedule";
    tenkSchedule.className = "tenk-schedule";
    tenmilerSchedule.className = "tenmiler-schedule";
    halfSchedule.className = "half-schedule";
    fullSchedule.className = "full-schedule show"; //show full marathon schedule
}

/* event listener, waiting for a click from a button class*/
fivekButton.addEventListener("click", show5K); //click distance to show schedule
tenkButton.addEventListener("click", show10K);
tenmilerButton.addEventListener("click", show10miler);
halfButton.addEventListener("click", showHalf);
fullButton.addEventListener("click", showFull);

/* objects for races near you, arrays fillin a table in HTML*/
/* 5k table */
var fiveKRaces = {
    distanceTitle: '5K Races',
    locations: ['Phoenix, Az', 'Gilbert, Az', 'Tucson, Az', 'Phoenix, Az'],
    dates: ['2/2/2020', '3/25/2020', '4/8/2020', '5/21/2020'],
    names: ['Dash for Dogs', 'Run with Rotary', 'Red Hills Ramble', 'Brookside PTA Fun Run'],
    times: ['7 am', '6 am', '5 am', '8 am'],
}
// for loop works with the object to fill in the info from array's
for (var i = 0; i < fiveKRaces.locations.length; i++) {
    var locations = document.getElementById('locations');
    var dates = document.getElementById('dates');
    var names = document.getElementById('names');
    var times = document.getElementById('times');
    locations.innerHTML += fiveKRaces.locations[i] + '<br>' + '<hr>';
    dates.innerHTML += fiveKRaces.dates[i] + '<br>' + '<hr>';
    names.innerHTML += fiveKRaces.names[i] + '<br>' + '<hr>';
    times.innerHTML += fiveKRaces.times[i] + '<br>' + '<hr>';
    distanceTitle.innerHTML = fiveKRaces.distanceTitle;
}
/* objects for races near you, arrays fillin a table in HTML*/
/* 10K table */
var tenKRaces = {
    distanceTitle1: '10K Races',
    locations1: ['Peoria, Az', 'Glendale, Az', 'Phoenix, Az', 'Goodyear, Az'],
    dates1: ['2/2/2020', '3/2/2020', '4/2/2020', '5/2/2020'],
    names1: ['ARP Grand Prix', 'Wingfoot Winter', 'RunAround Phoenix', 'Best Friends Relay'],
    times1: ['7 am', '6 am', '5 am', '8 am'],
}
// for loop works with the object to fill in the info from array's
for (var i = 0; i < tenKRaces.locations1.length; i++) {
    var locations1 = document.getElementById('locations1');
    var dates1 = document.getElementById('dates1');
    var names1 = document.getElementById('names1');
    var times1 = document.getElementById('times1');
    locations1.innerHTML += tenKRaces.locations1[i] + '<br>' + '<hr>';
    dates1.innerHTML += tenKRaces.dates1[i] + '<br>' + '<hr>';
    names1.innerHTML += tenKRaces.names1[i] + '<br>' + '<hr>';
    times1.innerHTML += tenKRaces.times1[i] + '<br>' + '<hr>';
    distanceTitle1.innerHTML = tenKRaces.distanceTitle1;
}
/* objects for races near you, arrays fillin a table in HTML*/
/* 10miler table */
var tenMilerRaces = {
    distanceTitle2: '10 Miler Races',
    locations2: ['Oracle, Az', 'Suprise, Az', 'Phoenix, Az', 'Tucson, Az'],
    dates2: ['2/2/2020', '3/2/2020', '4/2/2020', '5/2/2020'],
    names2: ['Oracle Rumble', 'Deser Classic', 'The Cupids Arrow', 'Mission Possible'],
    times2: ['7 am', '6 am', '5 am', '8 am'],
}
// for loop works with the object to fill in the info from array's
for (var i = 0; i < tenMilerRaces.locations2.length; i++) {
    var locations2 = document.getElementById('locations2');
    var dates2 = document.getElementById('dates2');
    var names2 = document.getElementById('names2');
    var times2 = document.getElementById('times2');
    locations2.innerHTML += tenMilerRaces.locations2[i] + '<br>' + '<hr>';
    dates2.innerHTML += tenMilerRaces.dates2[i] + '<br>' + '<hr>';
    names2.innerHTML += tenMilerRaces.names2[i] + '<br>' + '<hr>';
    times2.innerHTML += tenMilerRaces.times2[i] + '<br>' + '<hr>';
    distanceTitle2.innerHTML = tenMilerRaces.distanceTitle2;
}
/* objects for races near you, arrays fillin a table in HTML*/
/* Half Marathon table */
var halfRaces = {
    distanceTitle3: 'Half Marathon Races',
    locations3: ['Sedona, Az', 'Goodyear, Az', 'Phoenix, Az', 'Cameron, Az'],
    dates3: ['2/2/2020', '3/2/2020', '4/2/2020', '5/2/2020'],
    names3: ['Run Sedona', 'Heart & Sole', 'Ingleside', 'Little River Gorge'],
    times3: ['7 am', '6 am', '5 am', '8 am'],
}
// for loop works with the object to fill in the info from array's
for (var i = 0; i < halfRaces.locations3.length; i++) {
    var locations3 = document.getElementById('locations3');
    var dates3 = document.getElementById('dates3');
    var names3 = document.getElementById('names3');
    var times3 = document.getElementById('times3');
    locations3.innerHTML += halfRaces.locations3[i] + '<br>' + '<hr>';
    dates3.innerHTML += halfRaces.dates3[i] + '<br>' + '<hr>';
    names3.innerHTML += halfRaces.names3[i] + '<br>' + '<hr>';
    times3.innerHTML += halfRaces.times3[i] + '<br>' + '<hr>';
    distanceTitle3.innerHTML = halfRaces.distanceTitle3;
}
/* objects for races near you, arrays fillin a table in HTML*/
/* Full Marathon table */
var fullRaces = {
    distanceTitle4: 'Full Marathon Races',
    locations4: ['Tucson, Az', 'Phoenix, Az', 'Tucson, Az', 'Tucson, Az'],
    dates4: ['2/2/2020', '3/2/2020', '4/2/2020', '5/2/2020'],
    names4: ['Run to Rescue', 'PVSchools Community', 'TMC Sunrise', 'Miles for Manufacturing'],
    times4: ['7 am', '6 am', '5 am', '8 am'],
}
// for loop works with the object to fill in the info from array's
for (var i = 0; i < fullRaces.locations4.length; i++) {
    var locations4 = document.getElementById('locations4');
    var dates4 = document.getElementById('dates4');
    var names4 = document.getElementById('names4');
    var times4 = document.getElementById('times4');
    locations4.innerHTML += fullRaces.locations4[i] + '<br>' + '<hr>';
    dates4.innerHTML += fullRaces.dates4[i] + '<br>' + '<hr>';
    names4.innerHTML += fullRaces.names4[i] + '<br>' + '<hr>';
    times4.innerHTML += fullRaces.times4[i] + '<br>' + '<hr>';
    distanceTitle4.innerHTML = fullRaces.distanceTitle4;
}