let photos = require("../../assets/photos").map(photoUrl => {
    console.log(photoUrl)
    let splitUrl = photoUrl.split("/");
    let photo = {
        url: photoUrl,
        height: splitUrl.slice(-1)[0],
        width: splitUrl.slice(-2)[0],
        id: splitUrl.slice(-3)[0]
    };
    return photo;
})

module.exports = {
    getAllPhotos(req, res) {
        res.send(photos)
    },
    getPhotos(req, res) {
        let grayscale = req.params.grayscale;
        let height = req.params.height;
        let width = req.params.width;

        for (let i = 0; i < photos.length; i++) {
            photos[i].url = photos[i].url.replace("?grayscale", "")
            if (grayscale === "true") photos[i].url += "?grayscale";
        }

        let returnedArray = photos;

        if (height !== "0") {
            returnedArray = returnedArray.filter(photoObject => {
                return !height || photoObject.height === height;
            });
        }

        if (width !== "0") {
            returnedArray = returnedArray.filter(photoObject => {
                return !width || photoObject.width === width;
            });
        }

        res.send(returnedArray)
    }
}