import Api from '@/services/Api'

export default {
    login(creds) {
        return Api.post('login', creds)
    },
    signup(creds) {
        return Api.post('register', creds)
    }
}