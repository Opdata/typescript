class newPerson {
  // 클래스 멤버 변수 타입 정의
  name: string;
  age: number;

  // 멤버 변수 범위 지정
  public skill;
  private hobby;
  readonly time;

  // 멤버 변수 범위 지정 및 타입 정의
  private country: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
