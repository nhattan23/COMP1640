const adminController = require('../controllers/adminController');

const router = require('express').Router();

router.get('/loginAdmin', adminController.loginAdmin);

module.exports = router;