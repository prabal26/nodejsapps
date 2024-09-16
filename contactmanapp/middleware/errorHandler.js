const errorHandler = (err,req,res,next) => {
   const statusCode = res.statusCode ? res.statusCode : 500;
   switch(statusCode){
      case 400:
        res.json({title: "Validation Error",message: err.message,stackTrace: err.stackTrace});
        break;
      case 404:
        res.json({title: "Not Found",message: err.message,stackTrace: err.stackTrace});
        break;
      default:
        console.log("No error all good")
        break;
   }
   
   
};

module.exports = errorHandler;