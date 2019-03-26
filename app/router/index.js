const express = require('express');
const router = express.Router();
const user = require('./user');
const otp = require('./otp');


router.use('/user', user);
router.use('/otp', otp);



module.exports = router;