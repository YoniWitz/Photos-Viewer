import Api from '@/services/Api'

export default {
    AddNewPhoto(photoData) {
        return Api.post('photos', photoData)
    },
    getPhotos(params) {
        return Api.get(`photos/height/${params.height}/width/${params.width}/grayscale/${params.grayscale}/page/${params.page}/photosPerPage/${params.photosPerPage}`)
    },
    getAllPhotos() {
        return Api.get(`photos`)
    },
    ShowPhoto(photoId) {
        return Api.get(`photos/${photoId}`)
    },
    PutPhoto(photo) {
        return Api.put(`photos/${photo.id}`, photo)
    },
    DeletePhoto(photoId) {
        return Api.delete(`photos/${photoId}`)
    }
}