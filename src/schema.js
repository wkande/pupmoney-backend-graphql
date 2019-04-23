const { buildSchema } = require('graphql');



/**
 * Constructs a schema, using GraphQL schema language.
 */
var schema = buildSchema(`

    type User {
      name: String,
      id: Int
      email:String
    },

    type Wallet {
      name: String,
      id: Int
    },

    type Nodejs {
        getEnv: String!
    }

    type Users {
        getAll: [User]!
        ping: String!
    }

    type Wallets {
        getAll: [Wallet]!
        getWallet(wallet_id: Int!): [Wallet]!
        ping: String!
    }

    type Query {
        nodejs: Nodejs
        users: Users
        wallets: Wallets
    }
`);

module.exports = schema;
