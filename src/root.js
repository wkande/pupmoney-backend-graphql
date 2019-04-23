const Users = require('./Users.ts');
const Wallets = require('./Wallets.ts');
const Nodejs = require('./Nodejs.ts');


/** 
 * The root provides the top-level API endpoints
 * */
var root = {
    users:function (){
      return new Users();
    },
    wallets:function (){
      return new Wallets();
    },
    nodejs: () => {
      return new Nodejs();
    }
  }
  
  module.exports = root;