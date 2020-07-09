module.exports = errorHandler;

const response =require('./response');
function errorHandler(err, req, res, next) {

    console.log('errorHandler');
    console.log(err);
    if (typeof (err) === 'string') {
        // custom application error
        const data =   {
                message:err
            }
        return res.status(400).json(response.getresponse(400,'Bad Request',data));
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
          const data =   {
            message:'Invalid Token'
        }
        return res.status(401).json(response.getresponse(401,'Unauthorized',data));
    }

    const data ={
            message:err.message
        }
    // default to 500 server error
    return res.status(500).json(response.getresponse(500,'Internal Server Error',data));

}