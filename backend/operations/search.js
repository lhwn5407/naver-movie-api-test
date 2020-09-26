const fetch = require('node-fetch');

module.exports = function (options) {
  const defaultopt = {
    reqUrl: 'https://openapi.naver.com/v1/search/movie.json',
    query: '',
    headers: {
      'X-Naver-Client-Id': 'client id',
      'X-Naver-Client-Secret': 'client secret',
    },
    display: 10,
  };
  if (options === null) {
    options = defaultopt;
  }
  fetch(options.reqUrl, { method: 'GET', headers: options.headers });
};
