const AWS = require("aws-sdk");
var sqs = new AWS.SQS();
AWS.config.update({
  region: "us-east-1",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "portfolio-message";
const healthPath = "/health";
const worksPath = "/works";
const messagePath = "/message";

exports.handler = async function (event) {
  console.log("Request event: ", event);
  let response;

  switch (true) {
    case event.httpMethod === "GET" && event.path === healthPath:
      response = buildResponse(200);
      break;
    case event.httpMethod === "GET" && event.path === worksPath:
      response = await handleWorks();
      break;
    case event.httpMethod === "POST" && event.path === messagePath:
      response = await saveProduct(JSON.parse(event.body));
      break;
  }

  return response;
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

function handleWorks(statusCode) {
  let myObject = [
    {
      id: "1",
      img: "blog1",
      imgSmall: "blog1",
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "What Happens When You Type google.com in Your Browser and Press Enter When you type 'google.com' into your browser and press enter, a few things happen\n 1. Your browser sends a request to a DNS server to resolve the IP address for 'google.com'.\n2. The DNS server responds with the IP address for 'google.com'.\n3.Your browser sends a request to the server at that IP address.\n4. The server at that IP address responds with the HTML code for the 'google.com' home page.\n5. Your browser renders the HTML code and displays the 'google.com' home page\n.How does the browser look up an IP address for the domain? After you've typed the URL into your browser and pressed enter, the browser needs to figure out which server on the Internet to connect to. To do that, it needs to look up the IP address of the server hosting the website using the domain you typed in. It does this using a DNS lookup. You can read more about how DNS works here.Because DNS is complex and has to be blazingly fast, DNS data is cached at different layers between your browser and various places across the Internet. Your browser checks its cache, the operating system cache, a local network cache at your router, and a DNS server cache on your corporate network or at your internet service provider (ISP). If the browser cannot find the IP address at any of those cache layers, the DNS server on your corporate network or at your ISP does a recursive DNS lookup. A recursive DNS lookup asks multiple DNS servers around the Internet, which in turn asks more DNS servers for the DNS record until it is found.Once the browser gets the DNS record with the IP address, it's time for it to find the server on the Internet and establish a connection. ",
    },
  ];
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json", // <-- Important!
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(myObject),
  };
}

async function saveProduct(requestBody) {
  const paramsSNS = {
    Message:
      `Message Title: ${requestBody.MessageTitle} 
          ` +
      `Message: ${requestBody.Message}  
          ` +
      `Email: ${requestBody.Email} 
          ` +
      `GuestName: ${requestBody.GuestName} 
          ` +
      `Phone: ${requestBody.Phone}`,
    TopicArn: "arn:aws:sns:us-east-1:211551425798:portfolioTopic",
  };

  const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(paramsSNS)
    .promise();

  publishTextPromise
    .then(function (data) {
      console.log(
        `Message ${paramsSNS.Message} sent to the topic ${paramsSNS.TopicArn}`
      );
      console.log("MessageID is " + data.MessageId);
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });

  const paramsSQS = {
    DelaySeconds: 2,
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: requestBody.MessageTitle,
      },
      Email: {
        DataType: "String",
        StringValue: requestBody.Email,
      },
      GuestName: {
        DataType: "String",
        StringValue: requestBody.GuestName,
      },
      Phone: {
        DataType: "String",
        StringValue: requestBody.Phone,
      },
    },
    MessageBody: requestBody.Message,

    QueueUrl: "https://sqs.us-east-1.amazonaws.com/211551425798/portfoliQueue",
  };

  const queueRes = await sqs.sendMessage(paramsSQS).promise();
  const response = {
    statusCode: 200,
    body: queueRes,
  };

  return response;
}
