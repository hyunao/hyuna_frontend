// b_03_operation.js

// 사칙연산 =======================================
var n = 10;

// 함수를 만들어서 기본n의 값과, 적용할 변수의 값을 비교하는 함수
var nFn = function(data){
  return console.log( n, data );
};
nFn();

var plus = n + 10;
nFn(plus);

var minus = n - 5;
nFn(minus);

var divide = parseInt(n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);

var nReset = n = n + 10;
// n + 10 (기존 10에 10을 더해서) -> 변수 n에 재할당 -> nReset에 값을 담겠다.
nFn(nReset);

n = n + 20; // 40
n = n + 100;// 140
nFn();

// 자신에게 값을 할당/연산
n += 60;  // n = n + 60;
nFn();

n -= 10;  // n = n - 10;
nFn();

// 자신에게 * 2배
n *= 2;  // n = n * 2;
nFn()

// 자신에게  / 9
n /= 9; // n = n / 9;
nFn();

n = parseInt(n);
n %= 5;
nFn();

// 할당연산자 : 자신의 값을 이용하여 대입처리하고자 할때 사용.

// 증감연산자 =======================================
console.clear();
nFn();

n += 1;
nFn();

n++; // 결과도출후 1더하기
nFn();
nFn(n++);
nFn(n++);
nFn(n++);
nFn(n++);
nFn();

++n; // 1더하기 후 결과도출
nFn();
nFn(++n);
nFn(++n);
nFn(++n);
nFn();

// ------------------------------
console.clear();
var  i = 5;
console.log(i); // 5

i = i + 1;
console.log(i); // 6

i += 1;
console.log(i); // 7

++i;
console.log(i); // 8

i++;
console.log(i); // 9

console.log(i++); // 9  : 변수 i의 값을 먼저 도출 후 연산1을 더한다.
console.log(i++); // 10
console.log(i); // 11
console.log(++i); // 12 : 변수 i의 값을 먼저 연산 후에 도출
console.log(++i); // 13
console.log(i); // 13

// 위 전치/후치의 계산차이는 실무에서는 큰 차이는 없다!
// 우리의 일상과 비교한다면, 한국식나이계산과 미국식 나이계산차이로 이해
// 실무작업에서는 정확한 값을 도출 후 작업을 진행하는 것을 권장하기에

nFn();

n = n + 1;
n += 1;
n++;
++n;
nFn('-------------');

n = n - 1;
n -= 1;
nFn();
n--;
--n;
nFn();
console.clear();
// -------------------------------------------------------------------
// 비교연산자 =======================================
n = 20;
nFn( i ); // n값과 i값 비교

var compare = n === i; // === 같은가? n값과i의 값이 같이 않으므로 false
console.log( compare );

compare = n !== i; // !== 같지않은가? trueq
console.log( compare );

compare = n <= i;
console.log( compare );

compare = n >= i;
console.log( compare );

// or(||) , and(&&)
// ||, && 비교연산자는 좌변과 우변을 비교하여, true/false를 찾아내는 기법
// 한쪽이 완전한 충족을하면 다른 쪽은 비교하지 않는다!
// 단, 하나의 비교연산자( |, & )사용시 결과는 0,1로 도출
// 팁, 조금이라도 빠른 연산을 위해
// ||은 true가 나오기쉽거나 우선이되는 내용을 좌변에 배치
// &&는 falser가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치

var compare2 = true || false; // || 둘중 하나이상 참이면 true
console.log( compare2 );

compare2 = false && false;  // && 둘중 하나라도 거짓이면 false
console.log( compare2 );

compare3 = true & true; 
console.log('|, & 하나짜리로 비교', compare3 );

// !의 의미는 부정(반대)
console.log('체크1:',  !!false ); 
console.log('체크2:',  0 , !!0);

// ---------------------------------
var checkFn = function(data){
  var d = data || '??';
  return console.log( d );
};

checkFn(10);
checkFn();

console.clear();
// 삼항연산자 =======================================
// 참/거짓에 수행하는 내용은 무조건 1줄이어야 한다. 
// ()-첫번쨰항 ?-두번째 항 :- 세번째항 ;-네번째 항 () ? : ; 순서
// 조건 ? 조건 결과가 참이면 실행 : 결과가 거짓이면 실행;

(!true) ? console.log('결과 참!!') : console.log('결과 거짓!');

var list=[];
var tureFn=function(){
  list=['note', 'laptop', 'mouse', 'git'];
  return list;
};

var falseFn=function(){
  list=['wallet', 'glasses', 'smartphone'];
  return list;
};

// 백팩을 들고 다닌다면?(삼항 연산자의 가장 대표적인 케이스)
(!true)? trueFn():falseFn();
// (!true)? console.log(trueFn()):console.log(falseFn());
// !true = false (!는 반대를 뜻함)
console.log(list);

// -------------------------------------------------------------------
// 개발자라면 프론트와 백엔드 분야중 어느쪽인가?
// 프론트엔드 분야에서 익혀야하는 언어/기술['html' ,'css', 'javascript', 'jQuery', 'react', 'typescript'];
// 백엔드 분야에서 익혀야하는 언어/기술['html', 'sql', 'c++', '.net', 'pythone', 'java', 'spring', 'javascript', 'node.js'];

// 1. 3항 연산자로 도출해보세요!
var prLang=[];
var frontEndFn=function(){
  prLang=['html' ,'css', 'javascript', 'jQuery', 'react', 'typescript'];
  return prLang;
};
var backEndFn=function(){
  prLang=['html', 'sql', 'c++', '.net', 'pythone', 'java', 'spring', 'javascript', 'node.js'];
  return prLang;
};

// false ? frontEndFn() : backEndFn();
// console.log(prLang);


// 2. 함수실행 programer('front') -> 'front' || 'back'으로 작성하여 1번 내용 실행되게 만들어보세요.

var programer=function(field){
  var data=field==='front';
  var data2=field==='back';
  // data?frontEndFn():backEndFn;
  // 조건?
  //   참 : //참에 관련된 내용 작성
  //   조건 ? 참 : 거짓; //거짓에 관련된 내용에소 다시 조건 비교

    data?
      frontEndFn() : 
      data2?backEndFn():prLang=[];
};

// programer ('front');
// data와 값이 같으므로 frontEndFn():의 결과가 나옴(그 결과는 'html' ,'css', 'javascript', 'jQuery', 'react', 'typescript')
programer ('back');
// data2와 값이 같으므로 frontEndFn():의 결과가 나옴(그 결과는 'html', 'sql', 'c++', '.net', 'pythone', 'java', 'spring', 'javascript', 'node.js')
// programer('design');
// 아무런 결과도 나오지 않음 (design이라는 변수는 없으므로)
console.log(prLang);