const IUserController = require('./IUserController.js');

const config = require('../configs.js');
const UserDAO = require('../persistence/dao/' + config.IUserDAO);

let userdao = new UserDAO();

class UserController extends IUserController {
    constructor() {
        super();
    }

    async login(req, res) {
        let users = await userdao.login(req);
        return res.json(users);
    }

    async show(req, res) {
        let users = await userdao.index(req);
        return res.json(users);
    }

    async list(req, res) {
        let users = await userdao.list(req);
        return res.json(users);
    }

    async store(req, res) {
        const user = await userdao.create(req);
        return res.json(user);
    }

    async update(req, res) {
        let user = await userdao.update(req);
        return res.json(user);
    }

    async remove(req, res) {
        let user = await userdao.remove(req);
        return res.json(user);
    }

}

module.exports = UserController