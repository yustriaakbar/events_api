var express = require('express');
var rootRouter = express.Router();
var auth = require('./auth');
var category = require('./category');
var event = require('./event');
var participant = require('./participant');

rootRouter.use('/', auth);
rootRouter.use('/category', category);
rootRouter.use('/events', event);
rootRouter.use('/participants', participant);

module.exports = rootRouter;