function PromiseTest(): Promise<string[]> {
  // Promise에서 resolve된 값이 Promise<generic> 되어야 한다.
  const items: string[] = ["a", "b", "c"];

  return new Promise((resolve) => {
    resolve(items);
  });
}

PromiseTest();
