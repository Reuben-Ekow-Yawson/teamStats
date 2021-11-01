const team = {
    _players: [
      {
        firstName: 'Charles ',
        lastName: 'Asampong Taylor',
        age: 40
      },
        {
         firstName: 'Bernard',
        lastName: 'Dong Bortey',
        age: 39
        },
    
        {
        firstName: 'Ishmael',
        lastName: 'Addo',
        age: 43
        }
    ],
    
    _games: [
      {
        opponent: 'Hearts Of Oak',
        teamPoints: 50,
        opponentPoints: 30
      },
    
      {
        opponent: 'Kotoko',
        teamPoints: 45,
        opponentPoints: 32
      },
      {
        opponent: 'Liberty',
        teamPoints: 48,
        opponentPoints: 30
      }
    ],
    get players() {
      return this._players; 
    },
    get games() {
      return this._games;
    },
    
    
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
    
     this.players.push(player);
    },
     addGame(opponent, teamPoints, opponentPoints) {
            const game = {
                opponent: opponent,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints,
            };
            this.games.push(game);
        }
    };
    //adding players to team
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer('Lisa', 'Leslie', 44);
    team.addPlayer('Bugs', 'Bunny', 76);
    
    
    //adding games to team
    team.addGame('King Faisal', 30, 10);  
    team.addGame('Medeama', 25, 15);
    team.addGame('WAFA', 18, 11);
    console.log(team.players);
    console.log(team.games);