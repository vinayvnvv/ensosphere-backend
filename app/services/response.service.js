class ResponseService {
    sendErrorResponse(res, err) {
        const obj = {};
        obj.error = true;
        if(err) obj.error = err;
        res.status(403).json(obj);
    }
}

module.exports = new ResponseService();