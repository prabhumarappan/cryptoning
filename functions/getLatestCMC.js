const axios = require('axios');

const API_ENDPOINT = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10';

exports.handler = async (event, context) => {
  try {

    var config = {
        method: 'get',
        url: API_ENDPOINT,
        headers: { 
            'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY
        }
    };
    
    const response = await axios(config);
    const data = response.data.data;
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};