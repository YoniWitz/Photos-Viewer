// const csv = require('csv-parser');
// const fs = require('fs');

// let photosArray = []
// fs.createReadStream('../assets/myCsv.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(photosArray);
//     photosArray.push(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });


// module.exports = {
//     newArray:photosArray
// }
const axios = require('axios')
const url = "https://pastebin.com/raw/BmA8B0tY"
axios.get(url)
    .then(res =>
        console.log(res.data))
    .catch(err => console.log(err))

module.exports =
    [
        "https://picsum.photos/id/12/200/200",
        "https://picsum.photos/id/434/300/200",
        "https://picsum.photos/id/966/300/200",
        "https://picsum.photos/id/637/300/200",
        "https://picsum.photos/id/396/100/100",
        "https://picsum.photos/id/20/250/250"
    ]

