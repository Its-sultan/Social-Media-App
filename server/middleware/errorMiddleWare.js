// UNSUPPORTED ENDPOINT 

const notFound = (req, res, next) => {
    const error = new Error (`Not found -${req.originalUrl}`)
    res.status(404)
    next(error);
}

//ERROR  Middleware
const errorHandler = (error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'Internal Server Error' });

}


module.exports = {notFound, errorHandler};