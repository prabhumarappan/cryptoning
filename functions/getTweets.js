const axios = require('axios');
const querystring = require("querystring");


const API_ENDPOINT = 'https://api.twitter.com/2/tweets/search/recent?query=';

exports.handler = async (event, context) => {
  try {
    const params = querystring.parse(event.body);
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
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};