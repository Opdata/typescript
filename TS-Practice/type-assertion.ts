let assertion; // any
assertion = 20;
assertion = "hello"; // 개발자의 입장에서는 마지막 hello로 인하여 string 으로 유추할 수 있지만, TS 에서는 any로 간주한다.

// let newAssertion = a; // a의 타입이 any 로 추론되어 newAssertion의 타입도 any로 추론된다.

let newAssertion = a as string; // a의 타입을 string 으로 간주

// DOM API 조작
/* 타입 단언을 사용하지 않은 엘리먼트 접근 */
const div = document.querySelector("div"); // HTMLElement || null , HTMLElement 이거나 null 일 수 있다.

if (div) {
  div.innerText;
}

/* 타입 단언 사용하여  */
const ELementdiv = document.querySelector("#app") as HTMLElement; // HTMLElement 라고 타입 단언
div.innerText;
