module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    //  * eslint-plugin-vue 사용
    //  * 추천 룰셋 사용, 참고 : https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-2-x
    'plugin:vue/strongly-recommended',

    //  * 추천 룰셋 사용, 참고 : https://eslint.org/docs/rules/
    'eslint:recommended',

    //  @vue/prettier 가 하는 일
    //  * eslint-plugin-prettier: prettier 룰을 eslint로 변환하여 포함
    //    - 공식적으로 추천하지 않는 방법인데, vue-cli 에서 Eslint + Prettier 선택시 기본 기능임. 참고 : https://prettier.io/docs/en/integrating-with-linters.html
    //    - prettier rule 파일 (.prettier.js)을 자동으로 읽어서 eslint 에 반영
    //  * eslint-config-prettier: eslint-plugin-prettier 와 겹치는 룰 제거
    //  * eslint-config-prettier/vue: eslint-plugin-vue 와 겹치는 룰 제거
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 프로덕션 환경서 콘솔 출력 금지
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // eslint-plugin-prettier 의 불필요한 린팅을 제거, 어차피 formatOnSave 로 prettier 가 동작하기 때문
    'prettier/prettier': 'off',
  },
};
