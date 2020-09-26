module.exports = {
  // 홑 따옴표를 주로 사용
  singleQuote: true,
  // 항상 세미콜론을 붙임
  semi: true,
  // 탭 대신 스페이스를 사용
  useTabs: false,
  // 스페이스 간격 2
  tabWidth: 2,
  // 오브젝트, 배열등의 모든 항목 끝에 콤마를 넣는다
  trailingComma: 'all',
  // 80 자를 넘길경우 자동 래핑
  printWidth: 80,
  // 객체 리터럴과 중괄호 사이에 공백 추가 : {foo: bar} ==> { foo: bar }
  bracketSpacing: true,
  // 단독 화살표 함수에서 항상 괄호 사용 : 'x => x' ==> '(x) => x'
  arrowParens: 'always',
  // 오브젝트 속성의 따옴표 처리에 대해 일관되게 함
  quoteProps: 'consistent',
  //
  // 특정 언어별 설정 가능
  // "overrides": [
  //     {
  //         "files": ["*.md", "*.yml"],
  //         "options": {
  //             "tabWidth": 2
  //         }
  //     }
  // ]
};
