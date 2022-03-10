# cryptoning

## What is this project?
Cryptocurrency Dashboard is a digital platform where you can monitor your ever-shifting value of your favorite crypto coins so that you can manage both your crypto assets and related financial plans accordingly.

## Why?
Why? Because investors who actively engage in crypto with many types of cryptocurrencies can find their informations all in one place.

## Features
1. Track latest Crypto Rates  
2. Show Past History of Cryptocurrencies
3. Show Latest trending tweets about Cryptocurrencies

## Stack
1. React
2. Javascript
3. HTML/CSS

## APIs Used
1. Coinmarketcap -> https://coinmarketcap.com/api/

## How to run locally?
1. Add the value for `REACT_APP_CMC_API_KEY` in .env file
2. Add the value for `REACT_APP_TWITTER_BEARER_TOKEN` in .env file
3. Do `npm i` if you haven't done so already
4. Install netlify cli using `npm install netlify-cli -g`
5. Run the local development server by running `netlify dev`

## How to deploy?
1. Link the project to a netlify project
2. Make sure you add the environment variables from .env in Netlify UI
3. Run `netlify deploy -p`

## Demo
https://vibrant-liskov-fc7f33.netlify.app/

