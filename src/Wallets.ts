// @ts-ignore
const POSTGRESQL = require('./postgresql');
// @ts-ignore
const postgresql = new POSTGRESQL();
// @ts-ignore
const debug = require('debug')('pup:Wallets.ts');
debug('--> ...INIT');


class Wallets {


    constructor() {
    }


    async getAll() {
        debug('--> Wallets.getAll()');
        try{
            var query = {
                name: 'wallets-get-all',
                text: "SELECT id, name from WALLETS LIMIT 50",
                values: []
            };
            const data = await postgresql.shards[0].query(query);
            return data.rows
        }
        catch(err){
            debug(err);
            return err;
        } 
    }

    async getWallet(args) {
        // @ts-ignore
        debug('--> Wallets.getWallet()', args.wallet_id);
        try{
            var query = {
                name: 'wallets-get-one',
                text: "SELECT id, name from WALLETS WHERE id = $1",
                values: [args.wallet_id]
            };
            const data = await postgresql.shards[0].query(query);
            return data.rows
        }
        catch(err){
            debug(err);
            return err;
        } 
    }


    ping(){
        debug('--> Wallets.ping()');
        return "pong";
    }


}

module.exports = Wallets;