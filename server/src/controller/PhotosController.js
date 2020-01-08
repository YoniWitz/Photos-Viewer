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
        let photosPerPage = Number(req.params.photosPerPage);
        let page = Number(req.params.page);

        let tempArray = photos;
        let returnedArray = [];

        if (height !== "0") {
            tempArray = tempArray.filter(photo => {
                return !height || photo.height === height;
            });
        }

        if (width !== "0") {
            tempArray = tempArray.filter(photo => {
                return !width || photo.width === width;
            });
        }

        for (let i = (page - 1) * photosPerPage; (i < tempArray.length && i < ((page - 1) * photosPerPage + photosPerPage)); i++) {
            tempArray[i].url = tempArray[i].url.replace("?grayscale", "")
            if (grayscale === "true") tempArray[i].url += "?grayscale";
            returnedArray.push(tempArray[i]);
        }

       
        res.json(returnedArray);
    }
}