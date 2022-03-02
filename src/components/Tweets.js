import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { TwitterTweetEmbed } from 'react-twitter-embed';
var axios = require('axios');

function Tweets() {
  const {slug } = useParams();
  const [tweetIds, setTweetIds] = useState([]);

  useEffect(() => {
    setTweetIds(tweetId => fetchTweets());
  }, [])

  function fetchTweets() {
    if (JSON.parse(localStorage.getItem('tweetdata')) == null) {
      axios.get(`/.netlify/functions/getTweets?query=${slug}`)
        .then(function (response) {
          let tweets = response.data.data.data;
          console.log(tweets);
          let localTweet = [];
          for (var i = 0; i < tweets.length; i ++) {
            localTweet.push(tweets[i]);
          }
          localStorage.setItem('tweetdata', JSON.stringify(localTweet));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
			console.log("FOUND TWEETS IN LOCAL STORE");
		}
    let localTweetIds = JSON.parse(localStorage.getItem('tweetdata'));
    return localTweetIds;
  }

  return (
    <>
			<Container >
			<Row className='mt-4'>
				<Col md="12" sm="12" xs="12">
				<h1 className='text-center'>Tweets for { slug }</h1>
				</Col>
            {
            tweetIds.map(item => {
              return (
              <Col xs="12" sm="12" md="6" lg="4">
                <TwitterTweetEmbed options={{}} tweetId={item.id} key={item.id} />
              </Col>
              )
            })
          }
			</Row>
			</Container>
		</>
  )
}

export { Tweets };