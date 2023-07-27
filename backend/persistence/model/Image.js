const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        imageType: {
            type: String,
            required: true
        },
        binaryContent: {
            type: Buffer,
            required: true
        },
    }
);

module.exports = mongoose.model('Image', ImageSchema);