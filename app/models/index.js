'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../database/config/database.js')[env];
const db = {};

var database = config.production.database;
var username = config.production.username;
var password = config.production.password;
var dialect  = config.production.dialect;
var host     = config.production.host;

if (process.env.NODE_ENV == "development") {
  database = config.development.database;
  username = config.development.username;
  password = config.development.password;
  dialect  = config.development.dialect;
  host     = config.development.host;
}

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
  port: '5432',
    dialectOptions: {
    ssl: false,
    useUTC: false,
  },
  timezone: '-03:00'
});

//check if Database working
if (process.env.NODE_ENV == "development") {
  sequelize.authenticate().then(() => {
    console.log('INFO - Database connected.')
  }).catch(err => {
    console.log('ERROR - Unable to connect to the database:', err)
  })
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
