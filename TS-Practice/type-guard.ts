interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

/* 타입가드를 사용하지 않고 타입 단언을 사용한 타입 분류 예시 */
function introduce(): Developer | Person {
  // Developer, Person interface의 공통 속성만 리턴 가능
  return { name: "Ho", skill: "JS", age: 33 }; // 공통 속성만 가진 객체가 아닌 테스트를 위한 여러속성을 모은 객체 리턴
}

const Ho = introduce();
console.log(Ho.skill); // 공통속성인 name 만 접근가능 해서 skill 속성에는 접근 불가하여 Error

// 굉장히 코드가 길어지고 시각적으로 난잡해진다.
if ((Ho as Developer).skill) {
  const skill = (Ho as Developer).skill;
  console.log(skill);
} else if ((Ho as Person).age) {
  const age = (Ho as Person).age;
  console.log(age);
}

/* 타입 가드 사용하여 타입 분류 예시 */
function isDeveloper(target: Developer | Person): target is Developer {
  // is 예약어를 사용
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(Ho)) {
  Ho.skill;
} else {
  Ho.age;
}
