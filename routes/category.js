var express = require('express');
var router = express.Router();
const authController = require('../controllers').authentication;
const categoryController = require('../controllers').category;

router.get('/', [authController.verifyToken], categoryController.list);
router.get('/show-detail/:id', [authController.verifyToken], categoryController.getById);
router.post('/store', [authController.verifyToken], categoryController.store);
router.put('/update/:id', [authController.verifyToken], categoryController.update);
router.delete('/destroy/:id', [authController.verifyToken], categoryController.destroy);

module.exports = router;