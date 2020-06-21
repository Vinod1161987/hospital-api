module.exports = errorHandler;

const response =require('./response');
function errorHandler(err, req, res, next) {

    if (typeof (err) === 'string') {
        // custom application error
        const data =   {
                message:err
            }
        return res.status(400).json(response.getresponse(false,data));
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
          const data =   {
            message:'Invalid Token'
        }
        return res.status(401).json(response.getresponse(false,data));
    }

    const data ={
            message:err.message
        }
    // default to 500 server error
    return res.status(500).json(response.getresponse(false,data));

}