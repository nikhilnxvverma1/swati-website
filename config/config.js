const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const database ={
	development:"swati-website-dev",
	test:"swati-website-test",
	production:"swati-website-prod"
}

//environment specific object
const dbOptions={
	database:database[env], // as per environment
	username:"swati",
	password:"Coolermaster1", // TODO should be imported from elsewhere outside of code. But no biggie for development purposes.
	port:3306, // default for mysql
	dialect:"mysql"
}

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || 3000,
	db: dbOptions,
  },

  test: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || 3000,
    db: dbOptions,
  },

  production: {
    root: rootPath,
    app: {
      name: 'swati-website'
    },
    port: process.env.PORT || 3000,
    db: dbOptions,
  }
};

module.exports = config[env];
