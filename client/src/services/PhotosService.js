import Api from '@/services/Api'

export default {
    AddNewPhoto(PhotoData) {
        return Api.post('photos', PhotoData)
    },
    getPhotos(params) {
        return Api.get(`photos/height/${params.height}/width/${params.width}/grayscale/${params.grayscale}`)
    },
    getAllPhotos() {
        return Api.get(`photos`)
    },
    ShowPhoto(PhotoId) {
        return Api.get(`photos/${PhotoId}`)
    },
    PutPhoto(photo) {
        return Api.put(`photos/${photo.id}`, photo)
    },
    DeletePhoto(PhotoId) {
        return Api.delete(`photos/${PhotoId}`)
    }
}