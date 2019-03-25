const express = require('express');
const router = express.Router();
const Http = require('./app/services/http.service');

router.post('/sendotp', (req, res) => {
    console.log(req.body.phone);
    Http.sendSmsOtp(req.body.phone).then((response) => {
        res.json(response.data)
    }, (err) => {
        console.log("ERR_________________", err);
        res.json({err: err.response.data});
    })
}) 

module.exports = router;