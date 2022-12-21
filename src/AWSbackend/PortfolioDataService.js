const AWS = require("aws-sdk");
let sqs = new AWS.SQS();

AWS.config.update({
  region: "us-east-1",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "portfolio-message";

let queueURL = "https://sqs.us-east-1.amazonaws.com/211551425798/portfoliQueue";

// For Standard Queue
exports.handler = async (event) => {
  let params = {
    AttributeNames: ["SentTimestamp"],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: ["All"],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
  };

  const queueRes = await sqs.receiveMessage(params).promise();
  const response = {
    statusCode: 200,
    body: queueRes,
  };

  //   const deleteParams = {
  //     QueueUrl: queueURL,
  //     ReceiptHandle: queueRes.Messages[0].ReceiptHandle,
  //   };

  //   const removedMessage = await sqs.deleteMessage(deleteParams).promise();
  console.log("removed message");
  const { randomUUID } = require("crypto");
  const paramsDynamo = {
    TableName: dynamodbTableName,
    Item: {
      messageId: randomUUID(),

      //   Email: response.body.Messages[0].MessageAttributes.Email.StringValue,
      MessageTitle: "Greeting",
      Message: "Hello there",
      Email: "abelkibebe5@gmail.com",
      GuestName: "Abel Kibebe",
      Phone: "2365223132",
    },
  };

  return dynamodb
    .put(paramsDynamo)
    .promise()
    .then(
      () => {
        const body = {
          Operation: "SAVE",
          Message: "SUCCESS",
          Item: paramsDynamo.Item,
        };
        return buildResponse(200, body);
      },
      (error) => {
        console.error("Error in the dynamo: ", error);
      }
    );
  //   return response;

  //   return response.body.Messages[0].MessageAttributes.Email.StringValue;
  //   return response;
};

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
