const checkUrl = require('url-exists');

async function validate( value ){
    const exists = await checkUrl(value);
    if(!exists){
        return Promise.reject('Url inválido');
    }
}

module.exports = validate;
