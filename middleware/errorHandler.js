const AWS = require("aws-sdk")
const dotenv = require("dotenv").config();
AWS.config.update({ region: "us-east-1" });
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" })

const queueURL = process.env.QUEUE_URL

const sendMessage = async (messageBody) => {
  const params = {
    QueueUrl: queueURL,
    MessageBody: messageBody,
  };

  try {
    const data = await sqs.sendMessage(params).promise();
  } catch (error) {
    console.error("Error", error);
  }
};

const errorHandler = (err,req,res,next) => {
   const statusCode = res.statusCode ? res.statusCode : 500;
   switch(statusCode){
      case 400:
        res.json({title: "Validation Error",message: err.message,stackTrace: err.stack});
        sendMessage(err.stackTrace);
        break;
      case 404:
        res.json({title: "Not Found",message: err.message,stackTrace: err.stackTrace});
        sendMessage(err.message);
        break;
      default:
        console.log("No error all good")
        break;
   }
   
   
};

module.exports = errorHandler;