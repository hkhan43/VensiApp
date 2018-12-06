var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "ENTER KEY ID", "secretAccessKey": "ENTER SECRET ACCESS KEY"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
    
    var input = {"count": 15,"weight": 15.63}
    var params = {}
    params.TableName = "coke";
    params.Key = input; 
    

    docClient.delete(params, function (err, data) {
        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::delete::success" );                      
        }
    })
