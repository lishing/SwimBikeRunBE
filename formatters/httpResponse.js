const httpStatusCodes = require ('http-status-codes');
const {StatusCodes} = httpStatusCodes;

module.exports = {
    formatErrorResponse(res, err){
        const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR
        res.status(status).json({
            error:err.message
        })
    }
}