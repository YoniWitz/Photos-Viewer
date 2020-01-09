const photosObject = require("../../assets/photos");

module.exports = {
    async getAllPhotos(req, res) {
        res.send(await photosObject)
    },
    async getPhotos(req, res) {
        let grayscale = req.params.grayscale;
        let height = req.params.height;
        let width = req.params.width;
        let photosPerPage = Number(req.params.photosPerPage);
        let page = Number(req.params.page);

        let tempArray = (await photosObject).photos;

        let returnedObject = {
            photos: [],
            heightKeys: (await photosObject).heightKeys,
            widthKeys: (await photosObject).widthKeys
        };

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
            returnedObject.photos.push(tempArray[i]);
        }

        res.send(returnedObject);
    }
}