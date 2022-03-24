interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용

var seho: User = {
  age: 33,
  name: "세호",
};

console.log(seho);

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const capt = {
  name: "정",
  age: 33,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface sumFunction {
  (a: number, b: number);
}

var sumd: sumFunction;
sumd = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface stringArray {
  [index: number]: string;
}

var arr: stringArray = ["a", "b", "c"];

interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  lang: string;
}

var caption: Developer = {
  lang: "kr",
  name: "Johe",
  age: 32,
};
