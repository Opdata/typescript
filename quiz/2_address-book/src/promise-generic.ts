function PromiseTest(): Promise<string[]> {
  // Promise에서 resolve된 값이 Promise<generic> 되어야 한다.
  const items: string[] = ["a", "b", "c"];

  return new Promise((resolve) => {
    // 함수 정의 부분에서 반환타입을 정의해주었기 때문에 자동으로 resolve 에 대한 타입이 추론되어 추가적으로 정의해주지 않아도 된다.
    resolve(items);
  });
}

PromiseTest();
