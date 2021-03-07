const express = require('express');
const routes = require('express').Router();
const bodyParser = require('body-parser');

const RedirectHostController = require('../controllers/RedirectHostController');

routes.use(bodyParser.json());

routes.get('/:codeUrl', RedirectHostController.redirectUrl);
routes.post('/encurtador', RedirectHostController.shortenUrl);

module.exports = routes;