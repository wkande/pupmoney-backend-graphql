// @ts-ignore
const POSTGRESQL = require('./postgresql');
// @ts-ignore
const postgresql = new POSTGRESQL();
// @ts-ignore
const debug = require('debug')('pup:Users.ts');
debug('--> ...INIT');


class Users {


    constructor() {
    }


    async getAll() {
        debug('--> Users.getAll()');
        try{
            var query = {
                name: 'users-get',
                text: "SELECT id, name, email from USERS LIMIT 50",
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


    ping(){
        debug('--> Users.ping()');
        return "pong";
    }


}

module.exports = Users;