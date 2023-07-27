const ILoanController = require('./ILoanController.js');

const config = require('../configs.js');
const LoanDAO = require('../persistence/dao/' + config.ILoanDAO);

let loandao = new LoanDAO();

class LoanController extends ILoanController {
    constructor() {
        super();
    }

    async show(req, res) {
        let loan = await loandao.index(req);
        return res.json(loan);
    }

    async list(req, res) {
        let loans = await loandao.list(req);
        return res.json(loans);
    }

    async store(req, res) {
        const loan = await loandao.create(req);
        return res.json(loan);
    }

    async update(req, res) {
        let loan = await loandao.update(req);
        return res.json(loan);
    }

    async remove(req, res) {
        let loan = await loandao.remove(req);
        return res.json(loan);
    }

}

module.exports = LoanController