const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const mysqlDefaultPort = 3000;
const config = {
  development: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || mysqlDefaultPort,
    db: 'mysql://localhost/swati-website-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || mysqlDefaultPort,
    db: 'mysql://localhost/swati-website-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || mysqlDefaultPort,
    db: 'mysql://localhost/swati-website-production'
  }
};

module.exports = config[env];
