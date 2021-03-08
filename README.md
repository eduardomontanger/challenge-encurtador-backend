# Bem vindo ao Challenge Encurtador Backend! (1.0.0)

Este serviço tem por objetivo encurtar as URLs.

URL PRODUÇÃO: https://sleepy-lowlands-57900.herokuapp.com

- [Documentação]()
  - [Iniciando aplicação](#iniciando-aplicação)
  - [Contratos da API](#contratos-da-api)
  - [Variáveis de ambiente](#variaveis-de-ambiente)
  - [Tecnologias/Frameworks](#tecnologias/frameworks)
  - [To do](#to-do)

## Iniciando aplicação

```shell
# Instalando as dependências
npm install

# Executando em modo desenvolvedor
npm run dev

# Executando os testes
npm run test
```

## Contratos da API
Abaixo segue a documentação dos contratos da APIs disponíveis no projeto:

[Contratos APIs](https://app.swaggerhub.com/apis-docs/eduardomontanger/Challenge-encurtador-backend/1.0.0)

## Variáveis de ambiente

|          Propriedade          |  Tipo   |    Valor padrão    |                                 Descrição                                 |
|-------------------------------|---------|--------------------|---------------------------------------------------------------------------|
| DB_USERNAME                   | String  | N/A                | [DATABASE] Usuário do banco de dados                                      |
| DB_PASSWORD                   | String  | N/A                | [DATABASE] Senha do banco de dados                                        |
| DB_DATABASE                   | String  | N/A                | [DATABASE] Nome do banco de dados                                         |
| DB_HOST                       | String  | N/A                | [DATABASE] Endereço(Host) do banco de dados                               |
| URL_HOST                      | String  | N/A                | [APLICATION] Endereço(Host) do backend                                    |
| APP_PORT                      | String  | 8081               | [APLICATION] Porta da aplicação                                           |
| NODE_ENV                      | String  | Development        | [APLICATION] Tipo de ambiente (Ex: Development)                           |
| NUMBER_DAYS_EXPIRE_URL        | String  | 10                 | [APLICATION] Número de dias para expirar a URL                            |
| MINIMUM_CHARACTERS_RANDOM_URL | String  | 5                  | [APLICATION] Número minimo de caracteres randomicos para URL              |
| MAXIMUM_CHARACTERS_RANDOM_URL | String  | 10                 | [APLICATION] Número minimo de caracteres randomicos para URL              |


## Tecnologias/Frameworks

### Tecnologias
    
    - NodeJs
    - Postgres
    - Docker
    - Docker-compose

### Frameworks

    - Express
    - Sequelize
    - Dotenv
    - Body-parser

### To do

  - Criar dockerfile
  - Criar docker-compose
  - Criar testes unitário
  - Criar estrutura de tratativa de erros.
