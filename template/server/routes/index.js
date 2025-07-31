const usersRoutes = require('./users.js');

function registerRoutes(app) {
  app.use('/', usersRoutes);
}

module.exports = registerRoutes;
