let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

function drawTeam1() {
  let team1Elem = document.getElementById('team1')
  let team1Content = ''

  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == '1') {
      console.log('player', player);
      team1Content += player.emoji
    }
  }
  console.log('Here are the team 1 players', team1Content)
  team1Elem.innerText = team1Content
}


function drawTeam2() {
  let team2Elem = document.getElementById('team2')
  let team2Content = ''

  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    if (player.teamNumber == '2') {
      console.log('player', player);
      team2Content += player.emoji
    }
  }
  console.log('Here are the team 2 players', team2Content)
  team2Elem.innerText = team2Content
}

drawTeam1()
drawTeam2()


function betTeam1() {
  let team1Arr = players.filter(player => player.teamNumber == '1')
  let team2Arr = players.filter(player => player.teamNumber == '2')
  console.log(team1Arr)
  console.log(team2Arr)
  let team1TotalSkill = 0
  let team2TotalSkill = 0
  for (let i = 0; i < team1Arr.length; i++) {
    let player = team1Arr[i]
    team1TotalSkill += player.skill
    console.log('+', player.skill, team1TotalSkill)
  }
}

function betTeam2() {
  let team1Arr = players.filter(player => player.teamNumber == '1')
  let team2Arr = players.filter(player => player.teamNumber == '2')
  console.log(team1Arr)
  console.log(team2Arr)
  let team1TotalSkill = 0
  let team2TotalSkill = 0
  for (let i = 0; i < team2Arr.length; i++) {
    let player = team2Arr[i];
    team2TotalSkill += player.skill
    console.log('+', player.skill, team2TotalSkill)
  }
}




