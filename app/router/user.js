const express = require('express');
const router = express.Router();
const UserDB = require('./../db/user');
const ResponseService = require('./../services/response.service');
const Common = require('./../services/common.service');

router.post('/', (req, res) => {
    UserDB.addUser(req.body, (err, doc) => {
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.json(doc);
    });
});

router.get('/', (req, res) => {
    UserDB.getUsers((err, docs) => {
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.json(docs);
    });
})

router.get('/xls', (req, res) => {
    UserDB.getUsers((err, docs) => {
        console.log('converted', Common.convertUserJSonFormatForXls(docs));
        if(err) ResponseService.sendErrorResponse(res, err);
        else res.xls('users-' + Common.createCurrentDateFileName() + '.xlsx', Common.convertUserJSonFormatForXls(docs));
    });
});




module.exports = router;