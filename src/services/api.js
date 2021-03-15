const axios   = require('axios');

const hostAPI= 'http://localhost:9000';
const request = (method, path, data) =>{
    const config = {
        method: method,
        url: `${hostAPI}${path}`,
        data: data        
      };
   
   return axios(config).then(function (response) {
        return response
      }).catch(function (error) {   
        return error
    });
}

module.exports = request;