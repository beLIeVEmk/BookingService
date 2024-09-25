const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error{
    constructor(statusCode=StatusCodes.BAD_REQUEST,message="Request Body Validation Failed",data={}){
        super()
        this.statusCode=statusCode
        this.message=message
        this.data=data
    }
}

module.exports={ValidationError}