const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const uuid = require('node-uuid');
const dataScore = require('./data/dataScore');

app.use(bodyParser.json({ strict: false }));

app.get('/score', (req, res) => {
    const params = {
        TableName: 'data_score',
    };

    const result = dataScore.getScores(params);

    res.json(result);
});

app.get('/score/:scoreId', (req, res) => {
    const { scoreId } = req.params;

    const params = {
        TableName: 'data_score',
        Key: {
            scoreId,
        },
    };

    const result = dataScore.getScore(params);

    res.json(result);
});

app.post('/score', (req, res) => {
    const { age, listProperties, address, sourceOfIncome } = req.body;

    const scoreId = uuid.v4();

    const params = {
        TableName: 'data_score',
        Item: {
            scoreId,
            age,
            listProperties,
            address,
            sourceOfIncome,
        },
    };

    const result = dataScore.insertScore(params);
    if (result.error) {
        res.json(result.error);
    }

    res.json({ scoreId, age, listProperties, address, sourceOfIncome });
});

app.put('/score', (req, res) => {
    const { scoreId, age, listProperties, address, sourceOfIncome } = req.body;

    var params = {
        TableName: 'data_score',
        Key: { scoreId },
        UpdateExpression: 'set #a = :age, #b = :listProperties, #c = :address, #d = :sourceOfIncome',
        ExpressionAttributeNames: { '#a': 'age', '#b': 'listProperties', '#c': 'address', '#d': 'sourceOfIncome' },
        ExpressionAttributeValues: { ':age': age, ':listProperties': listProperties, ':address': address, ':sourceOfIncome': sourceOfIncome },
    };

    const result = dataScore.updateScore(params);

    if (result.error) {
        res.json(result.error);
    }

    res.json({ scoreId, age, listProperties, address, sourceOfIncome });
});

app.delete('/score/:scoreId', (req, res) => {
    const { scoreId } = req.params;

    const params = {
        TableName: data_score,
        Key: {
            scoreId,
        },
    };

    const result = dataScore.deleteScore(params);
    res.json(result);
});

module.exports.handler = serverless(app);