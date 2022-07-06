var express = require('express');
var router = express.Router();
const authController = require('../controllers').authentication;
const eventController = require('../controllers').event;

router.get('/', eventController.list);
router.get('/show-detail/:id', eventController.getById);
router.post('/store', [authController.verifyToken], eventController.store);
router.put('/update/:id', [authController.verifyToken], eventController.update);
router.delete('/destroy/:id', [authController.verifyToken], eventController.destroy);

module.exports = router;