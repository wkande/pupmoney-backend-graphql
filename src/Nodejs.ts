// @ts-ignore
const debug = require('debug')('pup:Nodejs.ts');
debug('--> ...INIT');


class Nodejs {


    constructor() {
    }

    getEnv() {
        debug('--> Nodejs.getEnv()')
        return "version:1.0.0"
    }


}

module.exports = Nodejs;