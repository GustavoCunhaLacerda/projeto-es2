const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const IImageDAO = require('./IImageDAO.js');

const Image = require('../model/Image.js');

const MONGOOSE_URL = 'mongodb+srv://admin:db.open(1234)@clusterdb.xdwjyub.mongodb.net/?retryWrites=true&w=majority';

class ImageDAO_mongo extends IImageDAO {
    constructor() {
        super();

        mongoose.connect(MONGOOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async index(req) {
        try {
            const image = await Image.findById(req.params.id);
            return image;
        } catch (error) {
            return error;
        }
    }

    async list() {
        try {
            const images = await Image.find();
            return images;
        } catch (error) {
            return error;
        }
    }

    async create(req) {
        try {
            const imgObj = {
                name: req.body.name,
                imageType: req.body.imageType,
                binaryContent: fs.readFileSync(req.file.path)
            }

            const image = await Image.create(imgObj);

            return image;
        } catch (error) {
            return error;
        }
    }

    async update(req) {
        try {
            const imgObj = {
                name: req.body.name,
                imageType: req.body.imageType,
                binaryContent: fs.readFileSync(req.file.path)
            }

            const image = await Image.findByIdAndUpdate(req.params.id, imgObj);
            return image;
        } catch (error) {
            return error;
        }
    }

    async remove(req) {
        try {
            const image = await Image.findByIdAndDelete(req.params.id);
            return image;
        } catch (error) {
            return error;
        }
    }
}

module.exports = ImageDAO_mongo