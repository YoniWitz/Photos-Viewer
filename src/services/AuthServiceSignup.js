import Api from '@/services/Api'

export default {
    signup(creds) {
        return Api.post('register', creds)
    }
}