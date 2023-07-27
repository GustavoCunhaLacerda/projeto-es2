const config = require("../configs.js");
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { json, urlencoded } = require('body-parser');

const UserController = require("../controller/" + config.IUserController)
const ImageController = require("../controller/" + config.IImageController)
const BookController = require("../controller/" + config.IBookController)
const LoanController = require("../controller/" + config.ILoanController)

const app = express();

const userController = new UserController();
const imageController = new ImageController();
const bookController = new BookController();
const loanController = new LoanController();

const uploadDirectory = path.join(__dirname, '../persistence/uploads');
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

class Routes {
    constructor() {
        app.use(json());
        app.use(urlencoded({ extended: true }));
    }

    health() {
        app.get('/', (req, res) => {
            res.send('Rest API funcionando');
        });
    }

    user() {
        app.post('/user/login', userController.login);
        app.get('/user', userController.list);
        app.post('/user', userController.store);
        app.get('/user/:id', userController.show);
        app.put('/user/:id', userController.update);
        app.delete('/user/:id', userController.remove);
    }

    image() {
        app.get('/image', imageController.list);
        app.post('/image', upload.single('image'), imageController.store);
        app.get('/image/:id', imageController.show);
        app.put('/image/:id', imageController.update);
        app.delete('/image/:id', imageController.remove);
    }

    book() {
        app.get('/book', bookController.list);
        app.post('/book', bookController.store);
        app.get('/book/:id', bookController.show);
        app.put('/book/:id', bookController.update);
        app.delete('/book/:id', bookController.remove);
    }

    loan() {
        app.get('/loan', loanController.list);
        app.post('/loan', loanController.store);
        app.get('/loan/:id', loanController.show);
        app.put('/loan/:id', loanController.update);
        app.delete('/loan/:id', loanController.remove);
    }

    listen() {
        app.listen(3000, () => console.log('server started'));
    }

}

module.exports = Routes