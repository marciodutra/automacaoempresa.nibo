const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '.env')
});

const environments = {
  dev: {
    baseUrl: process.env.BASE_URL
  },

  qa: {
    baseUrl: process.env.BASE_URL
  },

  prod: {
    baseUrl: process.env.BASE_URL
  }
};

const environment = process.env.ENV || 'qa';

module.exports = environments[environment];