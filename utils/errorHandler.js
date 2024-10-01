// Custom error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // If no specific status, default to 500
    res.status(statusCode);
  
    res.json({
      message: err.message,
    });
  };
  
  export  default errorHandler;
  