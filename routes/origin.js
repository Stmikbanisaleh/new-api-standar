const express = require('express');

const router = express.Router();

const originController = require('../controllers/originController');
const checkAuth = require('../middleware/check-auth');

// router.get('/', userController.userList);
router.get('/provinsi', checkAuth, originController.getProvince);
router.get('/kota', checkAuth, originController.getKota);


module.exports = router;
