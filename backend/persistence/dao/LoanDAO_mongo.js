const mongoose = require('mongoose');

const ILoanDAO = require('./ILoanDAO.js');

const Loan = require('../model/Loan.js');

const MONGOOSE_URL = 'mongodb+srv://admin:db.open(1234)@clusterdb.xdwjyub.mongodb.net/?retryWrites=true&w=majority';

class LoanDAO_mongo extends ILoanDAO {
    constructor() {
        super();

        mongoose.connect(MONGOOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async index(req) {
        try {
            const loan = await Loan.findById(req.params.id);
            return loan;
        } catch (error) {
            return error;
        }
    }

    async list() {
        try {
            const loans = await Loan.find();
            return loans;
        } catch (error) {
            return error;
        }
    }

    async create(req) {
        try {
            const loan = await Loan.create(req.body);
            return loan;
        } catch (error) {
            return error;
        }
    }

    async update(req) {
        try {
            const loan = await Loan.findByIdAndUpdate(req.params.id, req.body);
            return loan;
        } catch (error) {
            return error;
        }
    }

    async remove(req) {
        try {
            const loan = await Loan.findByIdAndDelete(req.params.id);
            return loan;
        } catch (error) {
            return error;
        }
    }
}

module.exports = LoanDAO_mongo