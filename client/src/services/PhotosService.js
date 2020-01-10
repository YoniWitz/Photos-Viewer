import Api from '@/services/Api'

export default {
    getPhotos(params) {
        return Api.get(`photos/height/${params.height}/width/${params.width}/grayscale/${params.grayscale}/page/${params.page}/photosPerPage/${params.photosPerPage}`)
    }
}