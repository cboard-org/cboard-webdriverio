require('dotenv').config();

const config = {
  host: process.env.APP_HOST || 'https://app.qa.cboard.io',
  login: {
    username: process.env.LOGIN_APP_SPEC_USERNAME || 'NoEmailSet: LOGIN_APP_SPEC_USERNAME env var was empty',
    password: process.env.LOGIN_APP_SPEC_PASSWORD || 'NoPasswordSet: LOGIN_APP_SPEC_USERNAME env var was empty'
  },
};

module.exports = config;
