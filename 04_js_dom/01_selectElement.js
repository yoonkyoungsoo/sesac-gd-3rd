/**
 요소 선택
 -querySelector("css 선택자")
 -querySelectorAll("css 선택자")
 -getElementByID("ID값")
 -getElementByClassName("Clasee값")
 -getElementByTagName("태그명")
 */

// document 객체
console.log(document); //html 문서 전체
console.log(document.documentElement); //html 문서 내의 모든 element(요소)들을 가져옴
console.log(document.head); //head 태그와 내부 모든 element
console.log(document.body); //body 태그와 내부 모든 element
console.log(document.URL);
console.log(document.domain);

//1.getElementByID
console.log("getElementByID");
console.log(document.getElementById("green"));

//2. getElementsByClaseeNAme
//동일한 클래스를 가진 요소가 여러개 있을 수 있으므로 elements(복수형)
console.log("gerElementsByClassName");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

//3. getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

//4.queryselector
//css에서 사용했던 선택자 이용해 요소 선택
//해당 css 선택자 중에서 일치하는 첫 번째 요소만 선택됨 -> 하나만 선택
console.log("queryselector");
console.log(document.querySelector("#green"));
console.log(document.querySelector(".pink"));
console.log(document.querySelector("div.pink"));
console.log(document.querySelector("body div"));

//5. queryselectorAll
//해당 css 선택자 중에서 일치하는 모든 요소를 선택
console.log("quertselectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div.pink")[2]);

//nodelist와 HTMLCollection
//getElementBy~~ -> HTMLCollection -> js에서 노드를 생성하거나 삭제하는 변경 감지
//querySelectorAll -> nodelist ->변경 감지 못함
//HTMLCollection, nidelist -> 유사 배열

//유사 배열
//length 속성을 가짐
//[i]로 접근 가능 -> 인덱스로 접근 가능
// 표준 객체 메서드 사용 불가 (map)
// 하지만 forEach는 사용 가능

//for of 문으로 pink클래스 모두 출력하기
console.log(" ");
let pinks = document.querySelectorAll(".pink"); //pink 클래스를 가진 모든 요소 배열로 저장
for (let el of pinks) {
  console.log(el);
}
