const usersRoutes = require('./users.js');

function registerRoutes(app) {
  app.use('/users', usersRoutes);
}

module.exports = registerRoutes;
