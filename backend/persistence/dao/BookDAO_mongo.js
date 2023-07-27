const mongoose = require('mongoose');

const IBookDAO = require('./IBookDAO.js');

const Book = require('../model/Book.js');

const MONGOOSE_URL = 'mongodb+srv://admin:db.open(1234)@clusterdb.xdwjyub.mongodb.net/?retryWrites=true&w=majority';

class BookDAO_mongo extends IBookDAO {
    constructor() {
        super();

        mongoose.connect(MONGOOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async index(req) {
        try {
            const book = await Book.findById(req.params.id).populate('image').exec();
            return book;
        } catch (error) {
            return error;
        }
    }

    async list() {
        try {
            const books = await Book.find().populate('image').exec();
            return books;
        } catch (error) {
            return error;
        }
    }

    async create(req) {
        try {
            const book = await Book.create(req.body);
            return book;
        } catch (error) {
            return error;
        }
    }

    async update(req) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body);
            return book;
        } catch (error) {
            return error;
        }
    }

    async remove(req) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            return book;
        } catch (error) {
            return error;
        }
    }
}

module.exports = BookDAO_mongo