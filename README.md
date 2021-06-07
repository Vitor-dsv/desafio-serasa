# 😃 Desafio Serasa - Backend Developer 🚀
## O Desafio propôs desenvolver uma arquitetura para três bases de arquitetura distintas 💥. 
## O Desenvolvimento deste repositório resolve o problema da Base B 💣.

#### 🤗 Pré-requisitos:
- Node instalado.
- AWS CLI instalado e configurado.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório.
$ git clone <https://github.com/Vitor-dsv/desafio-serasa.git>

# Instale as dependências
$ npm install

# Instale o Serverless.
$ npm install -g serverless

# Instale AWS SDK.
$ npm i --save aws-sdk body-parser express node-uuid serverless-http

# Instale o Serverless DynamoDB local.
$ npm i --save serverless-dynamodb-local serverless-offline

# Execute a aplicação em modo de Desenvolvimento.
$ serverless offline start --migrate

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```
