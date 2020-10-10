// 템플릿 리터럴
var name = '형욱';
var age = 23;
console.log(`저의 이름은 ${name}이고, 나이는 ${age}살 입니다.`);

// 화살표 함수
var plus = (num1, num2) => {
  return num1 + num2;
};
console.log(plus(1, 2));

// let, const 변수 선언
let x = 10;
x = 15;
console.log(x);

var ary1 = () => {
  const aryFalse = [1, 2, 3];
  console.log(aryFalse);
};
ary1();

// class
class Add {
  constructor(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }

  calc() {
    return this.arg1 + '+' + this.arg2 + '=' + (this.arg1 + this.arg2);
  }
}
var adder = new Add(5, 8);
console.log(adder.calc());

class AddSqure extends Add {
  constructor(arg1, arg2) {
    super(arg1, arg2);
  }
  calc() {
    return super.calc();
  }
  calcSqure() {
    this.pow = Math.pow(this.arg1 + this.arg2, 2);
    return '(' + this.arg1 + '+' + this.arg2 + ') ^ 2 =' + this.pow;
  }
}

var addOrSqure = new AddSqure(5, 8);
console.log(addOrSqure.calc());
console.log(addOrSqure.calcSqure());
