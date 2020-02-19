const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 3009;
const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const PhotosController = require('./src/controller/PhotosController')
app.get('/photos/height/:height/width/:width/grayscale/:grayscale/page/:page/photosPerPage/:photosPerPage', PhotosController.getPhotos)

app.use(express.static(__dirname + '/client/dist'));
app.get(/.*/, function (req, res) {
    res.sendFile(path.resolve(__dirname + '/client/dist/index.html'));
})

app.listen(port, console.log(`listening on ${port}`))

