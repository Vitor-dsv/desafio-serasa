const AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: new AWS.Endpoint('http://localhost:8000')
});

module.exports = dynamodb;