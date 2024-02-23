// 기본형 (Primitive type)
// 1. String
// - 텍스트 정보
// - 따옴표로 감싸야 함
// - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glassshose@goole.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = "a";
console.log(aa);

console.log("원하는 텍스트 콘솔창에 출력");

console.log(aa, "쉼표"); // 자동으로 띄어쓰기 됨
console.log(aa + "+ 연산자"); // 전부 연결해서 출력됨

// "안녕 나는 레일라야"
const name = "레일라";
console.log("안녕 나는", name, "야");
console.log("안녕 나는" + name + "야");

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``) 기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야`);
const printHello = `안녕 나는 ${name}야`; // -> 문자열로 저장됨

//2. number
// 숫자(정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3. boolean
// true, false 중에서 하나의 값을 가지는 논리
let checked = true;
let ishow = false;

//4.undefined
//값도 없고 타입도 지정되지 않은 상태
let undef;
console.log(undef); //undefined
let obj = {
  abc: 123,
};
console.log(obj.abc); // 123
console.log(obj.efg); //undefined -> 없는 것 출력하면 undefined

//5.null
//빈 값. null 타입으로 존재하지만 값이 없음
// 값이 없다는 것을 의도적으로 명시할 때 사용 -> 개발자가 직접 null 값을 할당
let empty = null;
console.log(empty);

//6. array - 베열
// 순서가 있는 데이터의 묶음
let fruits = ["Sapple", "orange", "bababa", "grape"];
let fruits2 = new Array(`apple`, "orange", "bababa", "grape");

console.log(fruits);
console.log(fruits[2]); // 2번 인덱스 요소를 뽑아 콘솔에 찍기

let arr = [1, "str".false, null, undefined];

//Quiz. 아래의 배열에서 아이스크림 콘솔에 찍기
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];

console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

//배열 응용
//다차원 배열
//배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];
console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[1][1]);

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

//7.object - 객체
//배열은 순서가 있는 반면에 객체는 키-값 형태로 작성
// {key1: value1, key2: value2., ...}
let cat = {
  name: "장화",
  age: 13,
  iscute: true,
  mew: function () {
    return "냐용";
  },
};

// 점 표기법
console.log(cat.name); //장화
console.log(cat.age); //13
console.log(cat.mew);

//대괄호 사용
console.log(cat["name"]); //장화
console.log(cat["age"]); //13

//변경, 추가 가능
cat.like = "layla";
console.log(cat);

cat.name = "홍련";
console.log(cat);

// JS의 자료형 -> 데이터 타입
//-기본형(primitive)
//-string
//-number
//-boolean
//-null
//-underfind
//-객체(object)
//-array (배열)
//-boject (객체) -> 키-값을 쌍으로 가지고 중괄호 {} 안에 감싸여 작성된 것

//js의 이상한 자동 형변환
let a = "3";
let b = "2";
let c = "10";
//문자 + 문자
console.log(a + c); //"310" -> 문자의 나열
console.log(c - a); // 7 -> 숫자가 됨
console.log(a * c); // 30 ->숫자가 됨
console.log(c / a); // 계산됨

//숫자 + 문자
console.log(b + a); //23->숫자가 문자열로 변환되어 문자의 나열
console.log(b - a); //-1 ->문자가 숫자로 변환되어 계산됨 나머지 *, / 도 동일

const introduce = {
  name: "kyoungsoo",
  age: 27,
  interest: ["game", "study", "sports"],
  mbti: "istp",
};

console.log(introduce);

//자로형 확인
//typeof
//피연산자의 데이터 타입을 문자열로 변환
console.log("--------------------------------------");
console.log(typeof "문자열"); //string
console.log(typeof "234"); //number
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof NaN); //nan:not a number
let und;
console.log(typeof und) / undefined;

// prompt("값을 입력해주세요");

// 형변환
console.log("-----------------------------------------------------------");
// 1. ? -> 문자
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1)); // "true"
console.log(typeof String(str2)); // "string"
console.log(String(str2)); // "123"
console.log(String(str3)); // "null"

console.log(str1.toString()); //"true"

// 2. ? -> 숫자
let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";

console.log(Number(n1)); // 1 -> true
console.log(n1);
console.log(Number(n2)); // 0 -> false

console.log(Number(n3)); // 12345
console.log(Number(n4)); // 123.9
console.log(parseInt(n3)); // 12345
console.log(parseInt(n4)); // 123 -> 소수점 버림
console.log(parseFloat(n4)); // 123 -> 소수점 남음
// 평균 점수 구하기 실습
let mathscore = "77";
let engscore = "88";
let avgscore = (Number(mathscore) + Number(engscore)) / 2;

console.log(avgscore);

//prompt 사용(사용자에게 값을 입력받아 활용하는 예시)
//prompt로 입력받는 값은 문자열로 저장되기 때문에 숫자형으로 형변환 함
let mathscore2 = Number(prompt("수학 점수를 입력하세요"));
let engscore2 = Number(prompt("영어 점수를 입력하세요"));

let avgscore2 = (mathscore2 + engscore2) / 2;
console.log(avgscore2);

alert(`당신의 평균 점수는 ${avgscore2}점 입니다!`);
