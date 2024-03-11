//다른 js 파일의 함수나 변수를 불러와 사용하기
//import, export문
//export문: 함수 내보내기
//import문: 함수 불러오기
//불필요한 함수 코드 반복을 줄이고, 효율적인 개발 가능, 유지보수 쉬워짐

//함수 불러오기
// //exprt 키워드만 작성한 경우 중괄호{}에 감싸서 작성
import { consoleName, consoleName2 } from "./02_util.js";
// //export default 키워드 작성시 중괄호 감싸지 않고 불러옴
// import consoleNameMain from "./02_util.js";

//한줄로 default 함수와 다른 함수들도 불러올 수 있음

// import consoleNameMain, { consoleName, consoleName2 } from "./02_util.js";

//여러 파일들 import 할 수 있음
//import plus, {minus} from './calc.js'

consoleName("윤경수");
consoleName2("윤경수");
consoleNameMain("윤경수");

//2. 마지막에 모아서 export문 작성
