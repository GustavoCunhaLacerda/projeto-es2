const mongoose = require('mongoose');

const IUserDAO = require('./IUserDAO.js');

const User = require('../model/User.js');

const MONGOOSE_URL = 'mongodb+srv://admin:db.open(1234)@clusterdb.xdwjyub.mongodb.net/?retryWrites=true&w=majority';

class UserDAO_mongo extends IUserDAO {
  constructor() {
    super();

    mongoose.connect(MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  async login(req) {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      return user;
    } catch (error) {
      return error;
    }
  }

  async index(req) {
    try {
      const user = await User.findById(req.params.id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async list(req) {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      return error;
    }
  }

  async create(req) {
    try {
      const users = await User.create(req.body);
      return users;
    } catch (error) {
      return error;
    }
  }

  async update(req) {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, req.body);
      return users;
    } catch (error) {
      return error;
    }
  }

  async remove(req) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return user;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserDAO_mongo