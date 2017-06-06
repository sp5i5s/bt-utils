var base  = require('./base')

class object extends base{

    constructor(){
		super();
	}

    clone(_object){
        return JSON.parse(JSON.stringify(_object));
    }
}

module.exports = object.prototype;