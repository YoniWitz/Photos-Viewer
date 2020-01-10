const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const PhotosController = require('./src/controller/PhotosController')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

const port = 3009

app.get('/photos/height/:height/width/:width/grayscale/:grayscale/page/:page/photosPerPage/:photosPerPage', PhotosController.getPhotos)

app.listen(port, console.log('listening'))

