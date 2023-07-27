const Routes = require('./routes/routes')

const routes = new Routes();
routes.health();

routes.user();
routes.image();
routes.book();
routes.loan();

routes.listen();