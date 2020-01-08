const csv = require('csv-parser');
const fs = require('fs');

let photosArray = []
fs.createReadStream('./assets/BmA8B0tY.csv')
  .pipe(csv())
  .on('data', (row) => {
    photosArray.push(row.url);
  })
  .on('end', () => {
    
  });
console.log(photosArray);


module.exports =  [
    "https://picsum.photos/id/12/200/200",
    "https://picsum.photos/id/434/300/200",
    "https://picsum.photos/id/966/300/200",
    "https://picsum.photos/id/637/300/200",
    "https://picsum.photos/id/396/100/100",
    "https://picsum.photos/id/20/250/250"
]

