function logMessage(value: string | number) {
  console.log(value);
}

logMessage("hello");
logMessage(100);

interface Developer {
  skill: string;
  name: string;
}

interface Person1 {
  name: string;
  hobby: number;
}

function getPerson1(some: Developer | Person1) {
  some.name; // 공통된 속성만 가져올 수 있음
  some.age;
  some.skill;
}

function getPerson2(some: Developer & Person1) {
  some.name;
  some.age;
  some.skill;
}
