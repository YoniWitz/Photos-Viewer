module.exports = {
    async register(req, res) {
        let email = req.body.email;
        let password = req.body.password;

        let reply = {};
        let alreadyRegistered = "already registered";
        let registerSuccess = "Successfully registered"

        if (users.find(user => user.email === email)) {
            reply['msg'] = alreadyRegistered;
        }
        else {
            users.push({
                email: email,
                password: password
            })
            reply['msg'] = registerSuccess;
        }

        res.send(reply);
    },

    async login(req, res) {
        let email = req.body.email;
        let password = req.body.password;

        let reply = {};
        let mustRegister = "register";
        let loginSuccess = "authenticated"
        let invalidCredentials = "noMatch"


        if (users.find(user => user.email === email)) {
            if (users.find(user => user.password === password))
                reply['msg'] = loginSuccess;
            else {
                reply['msg'] = invalidCredentials;
            }
        }
        else {
            reply['msg'] = mustRegister;
        }

        res.send(reply);
    }
}

let users = [{
    email: 'jonhirsh39@gmail.com',
    password: "123456"
}]
