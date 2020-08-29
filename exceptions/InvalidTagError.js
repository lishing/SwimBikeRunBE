const httpStatusCodes = require ('http-status-codes');
const {StatusCodes} = httpStatusCodes;

module.exports = class InvalidTagError extends Error {
    constructor (tag) {
        super (tag + ' is not a valid tag')
        this.status = StatusCodes.BAD_REQUEST
    }
}