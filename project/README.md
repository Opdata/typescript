## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

1. 타입스크립트 환경 구성  
   [x] NPM 초기화  
   [x] 타입스크립트 라이브러리 설치  
   [x] 타입스크립트 설정 파일 생성 및 기본 값 추가  
   [x] 자바스크립트 파일을 타입스크립트 파일로 변환  
   [x] `tsc` 명령어로 타입스크립트 컴파일 하기

2. 명시적 `any` 선언  
   [x] `tsconfig.json` 파일에 `noImplicitAny` 값을 `true` 로 추가  
   [x] 기초 틀 타입 설정  

3. 프로젝트 환경 설정  
   - Babel, ESLint, Prettier  

4. 외부 라이브러리 모듈화  
   - 자바스크립트 라이브러리를 타입스크립트에서 사용하기 위해  
      -> 타입스크립트로 정의된 라이브러리 일시 @types/... 로 설치  
      -> 정의된 라이브러리가 아닐시, `tsconfig.json` 에서 `typeRoots` 옵션을 사용하여 직접 설정한 파일을 불러오도록 설정  

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
