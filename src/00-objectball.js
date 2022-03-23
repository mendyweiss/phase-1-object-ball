function gameObject () {
    const teams = {
        home:{ 
            teamName:'Brooklyn Nets',
            colors:['Black', 'White'],
            players: {
                "Alen anderson": {number: 0,
                                    shoe: 16,
                                    points: 22,
                                    rebounds: 12,
                                    assists: 12,
                                    steals: 3,
                                    blocks: 1,
                                    slamDunks: 1},
                "Reggie Evens": {number: 30,
                                    shoe: 14,
                                    points: 12,
                                    rebounds: 12,
                                    assists: 12,
                                    steals: 12,
                                    blocks: 12,
                                    slamDunks: 7},
                "Brook Lopez": {number: 11,
                                    shoe: 17,
                                    points: 17,
                                    rebounds: 19,
                                    assists: 10,
                                    steals: 3,
                                    blocks: 1,
                                    slamDunks: 15},
                "Mason Plumlee": {number: 1,
                                    shoe: 19,
                                    points: 26,
                                    rebounds: 12,
                                    assists: 6,
                                    steals: 3,
                                    blocks: 8,
                                    slamDunks: 5},
                "Jason Terry": {number: 31,
                                    shoe: 15,
                                    points: 19,
                                    rebounds: 2,
                                    assists: 2,
                                    steals: 4,
                                    blocks: 11,
                                    slamDunks: 1}                    
            }
        },
        away: { 
            teamName:'Charlotte Hornets',
            colors:['Turquoise', 'Purple'],
            players: {
            "Jeff Adrien": {number: 4,
                                shoe: 18,
                                points: 10,
                                rebounds: 1,
                                assists: 1,
                                steals: 2,
                                blocks: 7,
                                slamDunks: 2},
                    "Bismak Biyombo": {number: 0,
                                shoe: 16,
                                points: 12,
                                rebounds: 4,
                                assists: 7,
                                steals: 7,
                                blocks: 15,
                                slamDunks: 10},
                    "Desagna Diop": {number: 2,
                                shoe: 14,
                                points: 24,
                                rebounds: 12,
                                assists: 12,
                                steals: 4,
                                blocks: 5,
                                slamDunks: 5},
                    "Ben Gordon": {number: 8,
                                shoe: 15,
                                points: 33,
                                rebounds: 3,
                                assists: 2,
                                steals: 1,
                                blocks: 1,
                                slamDunks: 0},
                    "Brendan Haywood": {number: 33,
                                shoe: 15,
                                points: 6,
                                rebounds: 12,
                                assists: 12,
                                steals: 22,
                                blocks: 5,
                                slamDunks: 12}                    

            }
        }
    }
    return teams;             
}
gameObject();

// Write a function that takes a players name and searches how many point that player scored.

function numPointsScored (playerName) {
    const game = gameObject();

    for (const team in game) {
        const teamObj = game[team];
        for (const teamDetails in teamObj) {
            const teamPlayers = teamObj.players;
            for (const indavidual in teamPlayers) {
                if (playerName.toUpperCase() === indavidual.toUpperCase()) {
                    console.log(teamPlayers[indavidual].points);
                    return teamPlayers[indavidual].points;
                }
            }
        } 
    }
}
numPointsScored();

//Write a function that takes a players name and searches for his shoe size.

function shoeSize (playerName) {
    const game = gameObject();
    for (const team in game) {
        const teamObj = game[team];
        for (const teamDetails in teamObj) {
            const teamPlayers = teamObj.players;
            for (const playerDetails in teamPlayers) {
                if (playerName.toUpperCase() === playerDetails.toUpperCase()) {
                    return teamPlayers[playerDetails].shoe;
                }
            }
        }
    } 
}

//Write a function that takes a teams name and returns the team colors.

function teamColors (nameOfTeam) {
    const game = gameObject();
    for (const team in game) {
        console.log(team);
        const teamDeets = game[team].teamName;
        console.log(teamDeets);
        if (nameOfTeam.toUpperCase() === teamDeets.toUpperCase()) {
            return game[team].colors;
        }
    }
}
teamColors()

//Write a function that takes a players name and returns their full stats.

function playerStats (playerName) {
    const game = gameObject();
    for (const team in game) {
        const teamObj = game[team];
        for (const teamDetails in teamObj) {
            const playersNames = teamObj.players
            // console.log(playersNames)
            for (const individuals in playersNames) {
                // console.log(individuals)
                if (individuals.toUpperCase() === playerName.toUpperCase()) {
                    return playersNames[individuals]
                }
            }
        }
    }
}

//Below are functions to make writing future functions easier to write.


function awayTeam () {
    return gameObject().away
}
function homeTeam () {
    return gameObject().home
}
function playersArr () {
     const playersArray = Object.assign({}, homeTeam().players, awayTeam().players);
     return playersArray;
}

//Write a function that calculates how many rebounds the biggest size shoe wearer has.
//(This has two steps. First find the largest shoe wearer, then find how many rebounds he has.)

function bigShoeRebounds () {
    let largestShoeSize = playersArr()["Alen anderson"].shoe;
    let largestShoeSizePlayer = playersArr()["Alen anderson"];
    debugger
    for (const playerName in playersArr()) {
        if (playerName.shoe > largestShoeSize) {
            largestShoeSize = playerName.shoe;
            largestShoeSizePlayer = playerName;
        }
    }
    return largestShoeSizePlayer;
}

//Write a function that searches for who has the most points.
//(I made a global function that can take an array or an object (Dictionary). Not just our current object)

function mostPointsScored (list, objToConvert = list) {
    const convertedObj = Object.keys(objToConvert);
    debugger
    let playerWithTheMostPoints = convertedObj[0]
    for (const player in list) {
        if (playersArr()[player].points > 1) {
            if (playersArr()[player].points > playersArr()[playerWithTheMostPoints].points) {
                playerWithTheMostPoints = player;
            }
        }
    }
    return playerWithTheMostPoints;
}

//Write a function that would calculate the winning team based on the players points.

function winningTeam () {
    debugger
    let homePoints = 0;
    let awayPoints = 0;
    for (const player in homeTeam().players) {
        homePoints += homeTeam().players[player].points;
    }
    for (const player in awayTeam().players) {
        awayPoints += awayTeam().players[player].points;
    }

    return (homePoints > awayPoints ? homeTeam().teamName : awayTeam().teamName)
}

//Write a function that finds the player with the longest name.

function playerWithLongestName () {
    let playerName = " ";
    for (const player in playersArr()) {
        debugger
        if (player.length > 1 && player.length > playerName.length) {
            playerName = player;
        }
    }
    return playerName;
}