const dynamodb = require('../commons/dynamodb');

exports.getScores = () => {
    const params = {
        TableName: 'data_score',
    };

    dynamodb.scan(params, (error, result) => {
        const { Items: score } = result;
        return JSON.parse({ score });
    });
}

exports.getScore = (params) => {
    dynamodb.get(params, (error, result) => {
        if (error) {
            return JSON.parse({ error: `Erro ao buscar os dados do Score: ${scoreId}` });
        }

        if (result && result.Item) {
            const {
                scoreId,
                age,
                listProperties,
                address,
                sourceOfIncome } = result.Item;
            return JSON.parse({ scoreId, age, listProperties, address, sourceOfIncome });
        } else {
            return JSON.parse({ error: `Os dados do Score: ${todoId} não foram enocontrados!` });
        }
    });
}

exports.insertScore = (params) => {
    dynamodb.put(params, (error) => {
        return JSON.parse({
            scoreId,
            age,
            listProperties,
            address,
            sourceOfIncome
        });
    });
}

exports.updateScore = (params) => {
    dynamodb.update(params, (error) => {
        if (error) {
            console.log(`Error updating Todo with id ${todoId}: `, error);
            return JSON.parse({ error: 'Could not update Todo' });
        }

        return JSON.parse({ todoId, title, done });
    });
}

exports.deleteScore = (params) => {
    dynamoDb.delete(params, (error) => {
        if (error) {
            console.log(`Error updating Todo with id ${todoId}`, error);
            return JSON.parse({ error: 'Could not delete Todo' });
        }

        return JSON.parse({ success: true });
    });
}
