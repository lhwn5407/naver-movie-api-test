const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  console.log(result.parsed);
  throw result.error;
}

module.exports = {
  naver: {
    clientId: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
  },
};
