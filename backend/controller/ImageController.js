const IImageController = require('./IImageController.js');

const config = require('../configs.js');
const ImageDAO = require('../persistence/dao/' + config.IImageDAO);

let imagedao = new ImageDAO();

class ImageController extends IImageController {
    constructor() {
        super();
    }

    async show(req, res) {
        let images = await imagedao.index(req);
        return res.json(images);
    }

    async list(req, res) {
        let images = await imagedao.list(req);
        return res.json(images);
    }

    async store(req, res) {
        const image = await imagedao.create(req);
        return res.json(image);
    }

    async update(req, res) {
        let image = await imagedao.update(req);
        return res.json(image);
    }

    async remove(req, res) {
        let image = await imagedao.remove(req);
        return res.json(image);
    }

}

module.exports = ImageController