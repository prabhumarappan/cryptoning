import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
var axios = require('axios');

// functional component to display tweets for a particular coin
const Tweets = (props) => {
  // if slug isn't passed, it is set to BTC by default
  let slug = 'BTC';

  // if the props exists, setting slug 
  if (props != null && props.slug) {
    slug = props.slug;
  }
  
  const [tweetIds, setTweetIds] = useState([]);

  // useEffect is being used like a lifecycle methods
  useEffect(() => {
    fetchTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // function to fetch tweets for a particular tweet 
  // and set the  setter to set the state
  function fetchTweets() {
    if (JSON.parse(localStorage.getItem('tweetdata')) == null) {
      axios.get(`/.netlify/functions/getTweets?query=${slug}`)
        .then((response) => {
          let tweets = response.data.data.data;

          let localTweets = [];
          for (var i = 0; i < tweets.length; i ++) {
            localTweets.push(tweets[i]);
          }
          localStorage.setItem('tweetdata', JSON.stringify(localTweets));

          setTweetIds(localTweets);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
			console.log("FOUND TWEETS IN LOCAL STORE");
      let localTweets = JSON.parse(localStorage.getItem('tweetdata'));
      setTweetIds(localTweets);
		}
  }

  // render function to return the wireframe to dispaly tweets
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
              <Col xs="12" sm="12" md="6" lg="4" key={item.id}>
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