const dotenv = require('dotenv');
dotenv.config();

export default {
  naver: {
    clientId: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
  },
};
