const express = require('express');
const router = express.Router();
const OtpCtrl = require('./../controllers/otp');
const ResponseService = require('./../services/response.service');

router.post('/send', (req, res) => {
    OtpCtrl.sendOtp(req.body.mobile, (err, response) => {
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.json(response);
    });
})

router.post('/retry', (req, res) => {
    OtpCtrl.retryOtp(req.body.mobile, (err, response) => {
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.json(response);
    });
})

router.post('/verify', (req, res) => {
    OtpCtrl.verifyOtp(req.body.mobile, req.body.otp, (err, response) => {
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.json(response);
    });
})


module.exports = router;