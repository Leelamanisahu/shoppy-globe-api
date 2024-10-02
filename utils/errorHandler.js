const errorHandler = (err, req, res, next) => {
    // Log the error details for debugging purposes
    console.error(`[Error] ${err.message}\nStack: ${err.stack}`);

   
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        statusCode,
        message: err.message || 'Internal Server Error',
    });
};

export default errorHandler;
