const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const AuthController = require('./controller/AuthController')
const PhotosController = require('./controller/PhotosController')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

const port = 3009

app.get('/photos/height/:height/width/:width/grayscale/:grayscale/page/:page/photosPerPage/:photosPerPage', PhotosController.getPhotos)
app.get('/photos', PhotosController.getAllPhotos)

app.post('/register', AuthController.register)
app.post('/login', AuthController.login)

app.listen(port, console.log('listening'))

