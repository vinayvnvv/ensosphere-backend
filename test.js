const axios = require('axios');

return axios(
        {
            method: 'post',
            url: 'http://control.msg91.com/api/sendotp.php?authkey=268197AnLsdS7I5c8fa96c&sender=ABZAS&mobile=919538579663'
        }
    ).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

