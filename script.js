// home work one
let numberOfSeries = prompt("Nechta serial ko'rdingiz")
let finalSerial = prompt("oxirgi ko'rgan serialingiz")
let serialBall = prompt("nechi baxo berasiz?")
// home work two
let actiorsObject = {}
let genresMassiv = []
let seriesDB = {
   count: numberOfSeries,
   series: {
    "Ahmad ibn Hanbal": finalSerial,
    "Umar ibn Hattob": serialBall
   },
   actors: actiorsObject,
   genres: genresMassiv,
   privat: false
}

console.log(seriesDB)

