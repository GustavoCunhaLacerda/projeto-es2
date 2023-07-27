const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
            enum: ["rejected", "approved", "waiting"]
        },
        borrowDate: {
            type: String,
            required: true,
        },
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        librarian: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        }
    }
);

module.exports = mongoose.model('Loan', LoanSchema);