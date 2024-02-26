// 함수
//-특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
//-함수 정의 -> 함수 호출
//-함수 정의 / 선언 구조
// -keyword: function
//-name: 함수, 이름 (camelCase로 많이 작성)
//-parameter: 함수 선언 시 매개변수로 받을 것
// -patrameter, arguments, 인자, 매개변수 모두 동일한 의미
//-body: 함수 내부 코드 (scope라고도 함)
//-함수 정의 / 선언 방식
//-함수 선언문(명시적 함수 선언)
//-function 키워드 사용
//-ex. function name () {}
//-함수 표현식
//-함수 이름 작성 x -> 변수를 만들어 함수를 저장
// -참고) JS에서는 함수가 값이기 때문에 가능한 방식
//  -ex.const funcName = function () {}
// -화살표 함수
// -function 키워드 사용하지 않고, 화살표로 작성
// -export. const funcName = () => {}
//  (참고) 함수 선언문 cs 함수 표현식
//      -함수 선언문 function funcName() {} 형태로 작성 / 함수 선언 전 호출 가능
//      -함수 표현식 const funcName = function () {} / 함수 선언 전 호출 불가

helloWorld1(); // 함수 선언문으로 작성된 함수는 선언 전 호출 가능
// helloworld2(); // 함수 표현식으로 작성된 함수는 선언 전 호출 불가능

//함수 정의
// 1. 명시적 함수 선언
function helloWorld1() {
  console.log("helloWorld1");
}

//함수 호출
helloWorld1();

//2. 함수 표현식
const helloworld2 = function () {
  console.log("helloworld2");
};

helloworld2();

//2-2 화살표 함수
const helloworld3 = () => {
  console.log("helloworld3");
};
helloworld3();

//return 사용
//return: 반환값 -> 함수 내부 코드의 "최종 결과 값"
//console.log()로 콘솔을 찍는 것에서 그치지 않고, 함수 내부의 코드의 최종 결과값을 저장하고 보관하기 위한 키워드
//-함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단

// 인자 없이 return 값만 가지고 있는 함수
function onePlusOne() {
  return 1 + 1;
}

onePlusOne(); // -> 2
console.log(onePlusOne()); // -> console.log() -> 콘솔창에 2를 찍음
console.log(onePlusOne() + onePlusOne()); // 4

function numPlusOne(num) {
  return num + 1;
}

console.log(numPlusOne(5)); // num -> 5 -> 5 + 1> 6을 반환 -> console.log(6)
console.log(numPlusOne(100)); // 101

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 7)); //12

//함수의 변환값을 변수에 저장해서 사용
const result = sum(5, 7);
console.log(result);
const result2 = sum(100, 35);

function hello(name) {
  alert(`Hello! ${name}`);
}
const username = "layla";
hello(username);

//실습 과제
//multifly 함수 만들기
function multifly(num1, num2) {
  return num1 * num2;
  console.log("aa"); //return 문 다음 코드는 실행하지 않음
  // console.log("num1 : ", num1);
  // console.log("num2 : ", num2);
}
console.log(multifly(7, 3)); //21
console.log(multifly(4, 10)); //40
///square 함수 만들기
function square(num1) {
  return num1 ** 2;
}

console.log(square(4));
console.log(square(11));
