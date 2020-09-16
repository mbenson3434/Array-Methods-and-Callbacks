import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function printData(callBack1, year, info) {
    callBack1.forEach(function(item){
        if(item.Year === year) {
            console.log(item[info]);
        }
    });
    };
  printData(getFinal(fifaData), 2014,"Home Team Name"); //a
  printData(getFinal(fifaData), 2014,"Away Team Name"); //b
  printData(getFinal(fifaData), 2014,"Home Team Goals"); //c
  printData(getFinal(fifaData), 2014,"Away Team Name"); //d


  function cupWinner(callBack1, year, info) {
    callBack1.forEach(function(item){
        if(item.Year === year) {
            console.log(item[info]);
        }
    });
};
cupWinner(getFinal(fifaData), 2014, "Home Team Name"); //e
//How to console.log
// let bigPops = cityData.filter(function(item){
//       return item.population > 500000;
//     })
//     console.log(bigPops.map(function(item){
//       return item.city;
//     }));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinal(array) {
    return array.filter(function(item){
        return item.Stage === "Final";
    });
}
//const getFinals = fifaData.filter(function(item){
//    return item.Stage === "Final";
//});

console.log(getFinal(fifaData));
//console.log(getFinals);



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack) {

    let years = callBack.map(function(item){
        return item.Year; 
    });
    return years;
};

console.log(getYears(getFinal(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    let winners = [];
    callBack.forEach(function(item){
        if(item["Away Team Goals"] > item["Home Team Goals"]) {
            winners.push(item["Away Team Name"]);
        } else if(item["Away Team Goals"] < item["Home Team Goals"]) {
            winners.push(item["Home Team Name"]);
        } else {
            winners.push(item["Win conditions"].slice(0, 6));
        }; 
    });
    return winners;
}

console.log(getWinners(getFinal(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 function getWinnersByYear(cbWinners, cbYears) {
    let winners = cbWinners;
    let years = cbYears;
    let allWinners = []
    winners.forEach(function(item, index) { //years[index] At each index for winners add a year
        allWinners.push(`In ${years[index]}, ${item} won the world cup!`);
    });
    return allWinners;
    
    //let both = {year: cbYears, winner: cbWinners };
    //return `In ${both.year}, ${both.winner} won the world cup!`
 };

console.log(getWinnersByYear(getWinners(getFinal(fifaData)),getYears(getFinal(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeSum = data.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"];
    },0);
    let awaySum = data.reduce(function(accumulator, item){
        return accumulator + item["Away Team Goals"];
    },0);
    let homeAverage = homeSum / data.length;
    let awayAverage = awaySum / data.length;

    return `The average number of home team goals is: ${homeAverage}. The average number of away team goals is: ${awayAverage}`;
};

console.log(getAverageGoals(getFinal(fifaData)));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
