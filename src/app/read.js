var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
   "accessKeyId": "ENTER KEY ID", "secretAccessKey": "ENTER SECRET ACCESS KEY"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
    var params = {}
    params.TableName = "coke";
    var key = { "count": 1,
                "weight": 1.19 };
    params.Key = key;
    

    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
