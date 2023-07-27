const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (telefone) {
                    return /^(\(\d{2}\)\s)?\d{4,5}-\d{4}$/.test(telefone);
                },
                message: 'Telefone inválido. O formato aceito é (XX) XXXX-XXXX ou XXXX-XXXX.',
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (email) {
                    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
                },
                message: 'Email inválido.',
            },
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['normal', 'librarian'],
        },
    }
);

UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', UserSchema);