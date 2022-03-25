class Person {
  public name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(this.name);
  }
}
