const IBookController = require('./IBookController.js');

const config = require('../configs.js');
const BookDAO = require('../persistence/dao/' + config.IBookDAO);

let bookdao = new BookDAO();

class BookController extends IBookController {
    constructor() {
        super();
    }

    async show(req, res) {
        let book = await bookdao.index(req);
        return res.json(book);
    }

    async list(req, res) {
        let books = await bookdao.list(req);
        return res.json(books);
    }

    async store(req, res) {
        const book = await bookdao.create(req);
        return res.json(book);
    }

    async update(req, res) {
        let book = await bookdao.update(req);
        return res.json(book);
    }

    async remove(req, res) {
        let book = await bookdao.remove(req);
        return res.json(book);
    }

}

module.exports = BookController