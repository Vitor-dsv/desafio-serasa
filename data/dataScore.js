const dynamodb = require('../commons/dynamodb');

exports.getScores = (params) => {
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
            return JSON.parse({ error: `Os dados do Score: ${scoreId} não foram enocontrados!` });
        }
    });
}

exports.insertScore = (params) => {
    dynamodb.put(params, (error) => {
        if (error) {
            console.log(`Erro ao inserir o Score: `, error);
            return JSON.parse({ error: 'Não foi possível inserir o Score' });
        }

        return JSON.parse({ success: true });
    });
}

exports.updateScore = (params) => {
    dynamodb.update(params, (error) => {
        if (error) {
            console.log(`Erro ao atualizar o Score com id ${scoreId}: `, error);
            return JSON.parse({ error: 'Não foi possível atualizar o Score' });
        }

        return JSON.parse({ success: true });
    });
}

exports.deleteScore = (params) => {
    dynamoDb.delete(params, (error) => {
        if (error) {
            console.log(`Erro ao excluir o Score com ID ${scoreId}: `, error);
            return JSON.parse({ error: 'Não foi possível deletar este Score' });
        }

        return JSON.parse({ success: true });
    });
}
