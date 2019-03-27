const SendOtp = require('sendotp');
const ENV = require('./../../env');
const sendOtp = new SendOtp(ENV.SMS_GATEWAY_KEY, 'Your OTP for Endosphere 2.0 campaign is {{otp}}. Please do not share it with anybody.');

class OTP {
    sendOtp(mobile, callback) {
        sendOtp.send(mobile, ENV.SMS_GATEWAY_ID, (err, data) => {
            console.log(err, data);
            callback(err, data);
        });
    }

    retryOtp(mobile, callback) {
        sendOtp.retry(mobile, false, (err, data) => {
            callback(err, data);
        });
    }

    verifyOtp(mobile, otp, callback) {
        sendOtp.verify(mobile, otp, (err, data) => {
            callback(err, data);
        });
    }
}

module.exports = new OTP();