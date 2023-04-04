const games = [
   {
      _id: "1",
      name: "Dying Light 2",
      dateFirstPlayed: "02/17/2022",
      dateLastplayed: "02/20/2022",
      hoursPlayed: "7",
      trophyPercentage: "12",
   },
   {
      _id: "2",
      name: "King of Fighters XV",
      dateFirstPlayed: "02/17/2022",
      dateLastplayed: "02/19/2022",
      hoursPlayed: "2",
      trophyPercentage: "17",
   },
   {
      _id: "3",
      name: "Guilty Gear Strive",
      dateFirstPlayed: "06/18/2021",
      dateLastplayed: "02/20/2022",
      hoursPlayed: "256",
      trophyPercentage: "68",
   },
];

export function getGames() {
   return games;
}
