const axios = require('axios');
const ENV = require('./../../env');

class Http {
    sendSmsOtp(mobile) {
        var queryParams = '?';
        queryParams += 'authkey=' + ENV.SMS_GATEWAY_KEY;
        // queryParams += '&message'
        queryParams += '&sender=' + ENV.SMS_GATEWAY_ID;
        queryParams += '&mobile=' + mobile;
        // return axios(
        //     {
        //         method: 'post',
        //         url: ENV.SMS_GATEWAY_PATH + queryParams
        //     }
        // );
        return axios.post(ENV.SMS_GATEWAY_PATH + 'sendotp.php?' + queryParams);
    }
}

module.exports = new Http();