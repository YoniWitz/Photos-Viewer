const csv = require('csv-parser');
const fs = require('fs');

async function parseCsv() {
  const promise = await new Promise((resolve, rej) => {
    let photosArray = []

    fs.createReadStream('./assets/BmA8B0tY.csv')
      .pipe(csv())
      .on('data', (row) => {
        photosArray.push(row.url);
      })
      .on('end', () => {
        resolve(photosArray)
      })
  })

  const photos = await promise.map(photoUrl => {
    let splitUrl = photoUrl.split("/");
    let photo = {
      url: photoUrl,
      height: splitUrl.slice(-1)[0],
      width: splitUrl.slice(-2)[0],
      id: splitUrl.slice(-3)[0]
    };
    return photo;
  })
  console.log(photos)
  return photos;
}
module.exports = parseCsv();

