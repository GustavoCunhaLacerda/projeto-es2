const mongoose = require('mongoose');

const genresEnum = [
    "NOVEL",
    "POETRY",
    "DRAMA",
    "ESSAY",
    "SHORT_STORY",
    "MYSTERY",
    "SCIENCE_FICTION",
    "FANTASY",
    "ROMANCE",
    "HORROR",
    "HISTORICAL_FICTION",
    "BIOGRAPHY",
    "AUTOBIOGRAPHY",
    "TRAVEL",
    "SELF_HELP",
    "PHILOSOPHY",
    "THRILLER",
    "COMEDY",
    "SATIRE",
    "CHILDREN",
    "YOUNG_ADULT",
];



const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        genres: {
            type: Array,
            required: true,
            validate: {
                validator: function (genres) {
                    let val = true;

                    genres.forEach(genre => {
                        if (!genresEnum.includes(genre)) {
                            val = false;
                        }
                    });

                    return val;
                },
                message: "Gênero Inválido"
            }
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
            required: false,
        }
    }
);

module.exports = mongoose.model('Book', BookSchema);