var express = require('express');
var router = express.Router();
const authController = require('../controllers').authentication;
const participantController = require('../controllers').participant;

router.get('/', [authController.verifyToken], participantController.list);
router.get('/show-detail/:id', [authController.verifyToken], participantController.getById);
router.post('/nik', participantController.getByNik);
router.post('/store', participantController.store);
router.put('/update/:id', [authController.verifyToken], participantController.update);
router.delete('/destroy/:id', [authController.verifyToken], participantController.destroy);

module.exports = router;