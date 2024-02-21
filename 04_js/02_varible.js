console.log("connected!");

// 변수 선언하고 사용하기
// var 키워드
// 1. 변수 선언 -> 값 할당
// 2. 변수 선언과 값 할당을 동시에
//변수 선언
var varname; //undefinde
//변수 할당
varname = "layla";
console.log(varname); // layla 출력

//변수 재할당
varname = "yuki"; //varname 변수의 값이 : "layla" -> "yuki" 변경
console.log(varname); //yuki 출력

//변수 선언과 값 할당을 동시에
var varname2 = "layla2";

//var의 이상한 점
//1. 변수를 동일한 이름으로 재선언 할 수 있음
var varname = "lily";
console.log(varname); //lily 출력
//2. 변수를 선언하기 전 값을 할당할 수 있음
// 장점같아 보일 수 있으나, 유지보수할 때 최악임
aa = 123;
console.log(aa);
// let 키워드
// 1. 변수 선언 -> 값 할당
// 2. 변수 선언과 값 할당을 동시에

//변수 선언
let letname;
//값 할당
letname = "홍길동";
console.log(letname); //홍길동

//변수 선언과 값 할당을 동시에
let letname2 = "심청이";
console.log(letname2); //심청이 출력

let letname2 = "심봉사";
console.log(letname2);

//let letname2 = "심봉사"  //error: 중복 선언 불가

letname2 = "심봉사"; //값 재할당 가능
console.log(letname2);
