const csv = require('csv-parser');
const fs = require('fs');

let photosObject = {
  photos: null,
  heightKeys: [],
  widthKeys: []
}

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

  photosObject.photos = await promise.map(photoUrl => {
    let splitUrl = photoUrl.split("/");
    let photo = {
      url: photoUrl,
      height: splitUrl.slice(-1)[0],
      width: splitUrl.slice(-2)[0],
      id: splitUrl.slice(-3)[0]
    };

    //populate drop down height
    if (photosObject.heightKeys.indexOf(photo.height) == -1)
      photosObject.heightKeys.push(photo.height)
    //populate drop down width
    if (photosObject.widthKeys.indexOf(photo.width) == -1)
      photosObject.widthKeys.push(photo.width)

    return photo;
  })

  return photosObject;
}
module.exports = parseCsv();

