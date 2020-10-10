# vue와 각종 영화 api를 활용해 영화를 리스팅 해봅니다

### 시작 하기

##### 코드 받기

```bash
# 클론
git clone https://github.com/lhwn5407/naver-movie-api-test
cd naver-movie-api-test

# submodule 받기
git submodule update --init

# 의존성 설치
npm run install-all
```

##### 서버 시작

```bash
# 백엔드, 프론트 엔드 동시에 실행
npm run serve-all

# 백엔드 express 서버 (3000)
cd backend
npm run serve

# 프론트엔드 개발 서버 (8080)
cd frontend
npm run serve
```

### 소프트웨어 스택

- 도커 컨테이너 기반 개발환경
- vue.js (frontend)
- express (backend)

기반으로 하는 리포 [vue-devcontainer-1container](https://github.com/lhwn5407/vue-devcontainer-1container)

### 파일 구조

- backend/ - 백엔드 개발용 서버. express 를 사용한다. frontend 에서 빌드한 결과물을 포함한다.

  - express 구조를 따름
  - backend/public : frontend 에서 빌드한 결과물을 내보내는 곳.

- frontend/ - 프론트 엔드 개발용 서버 (vue-cli 에서 만들어 줄 수도 있고, webpack 을 별도로 설치할 수도 있다.)
  - 프론트 엔드 개발 파일이 위치함
  - 모든 api(db와의 통신, 외부 api와의 통신 등)는 backend/\* 에 위치 하기 때문에 개발시 편의를 위해 임시로 프록시를 해준다.
  - vue-cli를 사용할 경우 vue.config.js 파일이 frontend 개발시 사용되는 개발서버 설정파일이며 프록시 설정이 위치해 있다.

### express 환경

express 환경 세팅 : express-generator 로 생성

```bash
npm install -g express-generator
express --view=pug backend	// backend 디렉토리 하위에 express 스캐폴딩 생성

cd backend
npm install
npm start					// localhost:3000 으로 express 서버가 실행됨.
```

### vue-cli 환경

vue 프론트 엔드 환경 세팅 : @vue/cli 로 생성

```bash
npm install -g @vue/cli
vue create frontend 		// frontend 디렉토리 하위에 vue 스캐폴딩 생성

cd frontend
npm install
npm run serve				// localhost:8080 으로 vue 개발서버가 실행됨.
```

##### frontend 빌드 출력 디렉토리 지정 및 프록시

devServer 설정은 [webpack-dev-server #devserverproxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)를 사용한다

webpack proxy 설정은 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options) 를 사용한다

```js
// vue.config.js

module.exports = {
  devServer: {
    // webpack-dev-server
    proxy: {
      // -> http-proxy-middleware
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  outputDir: '../backend/public/',
};
```

proxy 설정 설정

- '/api'

  - /api 로 시작하는 모든 요청이 프록시 됨
  - 참고링크 : [http-proxy-middleware #context-matching](https://github.com/chimurai/http-proxy-middleware#context-matching)

- changeOrigin: true
  - [호스트 헤더](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Host) 의 url을 target으로 변경함. 기본값 false
  - [이름 기반 가상 호스트](https://en.wikipedia.org/wiki/Virtual_hosting#Name-based) 환경에서 유용할 수 있음. (동일한 아이피에서 여러 호스트 이름으로 여러 사이트를 호스트)
  - 즉, 하나의 ip를 가진 api서버에서 api1.domain.com, api2.domain.com 등으로 여러 도메인을 활용한다면 이 설정이 반드시 필요함
- pathRewrite: {'^/api': ''}
  - 요청 uri에서 /api 시작하는 경로를 제거
  - 만약 이 설정이 **없다면** `/api/users` 에대한 요청이 `http://localhost:3000/api/api/users` 로 프록시 됨.
    - 프록시 경로 = target + request path 이기 때문.
    - 이 설정을 쓰지 않으려면 target : 'http://localhost:3000' 으로 하면 되긴 함. 설정의 명확성을 위함

### 기타 트윅
