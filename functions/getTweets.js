const axios = require('axios');

const API_ENDPOINT = 'https://api.twitter.com/2/tweets/search/recent?query=';

exports.handler = async (event, context) => {
  try {
    const params = event.queryStringParameters;
    const slug = params.slug || "blockchain";
    let NEW_API_ENDPOINT = API_ENDPOINT + slug;

    var config = {
        method: 'get',
        url: NEW_API_ENDPOINT,
        headers: { 
          'Authorization': process.env.REACT_APP_TWITTER_BEARER_TOKEN
        }
    };
    
    const response = await axios(config);
    const data = response.data;
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};