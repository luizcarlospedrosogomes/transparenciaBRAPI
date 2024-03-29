const axios   = require('axios');
require('dotenv').config()
const hostAPITransparencia  = 'https://'+process.env.HOST_TRANSPARENCIA+'/api-de-dados';

const request = (method, path) =>{  
    const config = {
        method: method,
        url: `${hostAPITransparencia}${path}`,
        headers: { 
          'chave-api-dados':  process.env.KEY_PORTAL_TRANP
        }
      };

   return axios(config).then(function (response) {        
        return response
      }).catch(function (error) {

        return error
    });
}

module.exports = request;