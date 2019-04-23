## PupMoney Backend GraphQL
A GraphQL interface for PupMoney that will replace the REST endpoints. 
>NOTE: This GraphQL interface is early development

This is a Nodejs/Express/GraphQL project in early developmemt. The GraphQL calls will be developed in parallel with the REST endpoints. Both wil remain in production.


## Startup

#### Exports
The value of DB_URLS is in the private SECRETS project. 
It must be set prior to starting Nodejs for the appropriate env (dev, stage, prod).

```BASH
# DB_URLS
export DB_URLS=<from-secret-project>
```


Set the node environment.
```BASH
# production
export NODE_ENV=production
# stage
export NODE_ENV=stage
# development
export NODE_ENV=
```

Startup for development.
```bash
DEBUG=pup:* npm start
```


## Examples
There is a GraphiQL browser based interface running on the stage server @Heroku.

https://pupmoney-backend-graphQL.heroku.com/graphql

*A simple example:*
```
{
  wallets{
    getWallet(wallet_id:1) {
      id,name
    }
  }
  users{
    getAll {
      id, name, email
    }
  }
}
```

More calls can be found in the ./src/schema.js file.