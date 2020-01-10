const photosObject = require("../../assets/photos");

module.exports = {
    async getPhotos(req, res) {
        let grayscale = req.params.grayscale;
        let height = req.params.height;
        let width = req.params.width;
        let photosPerPage = Number(req.params.photosPerPage);
        let page = Number(req.params.page);

        let tempArray = (await photosObject).photos.map(photo => Object.assign({}, photo));

        let returnedObject = {
            photos: [],
            heightKeys: (await photosObject).heightKeys,
            widthKeys: (await photosObject).widthKeys
        };

        if (height !== "0") {
            tempArray = tempArray.filter(photo => !height || photo.height === height)
        }

        if (width !== "0") {
            tempArray = tempArray.filter(photo => !width || photo.width === width);
        }

        const startingIndex = (page - 1) * photosPerPage;
        const endingIndex = (page - 1) * photosPerPage + photosPerPage;

        returnedObject.photos = tempArray.filter((item, i) => {
            if (i >= startingIndex && i < tempArray.length && i < endingIndex) {
                if (grayscale === "true") item.url += "?grayscale";
                return item
            }
        })

        res.send(returnedObject);
    }
}