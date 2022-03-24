interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

const jaese: Person = {
  name: "jases",
  age: 44,
};

type myString = string;
var str: myString = "asa";

type Todo = {
  id: number;
  name: string;
  done: boolean;
};

function getTodo(todo: Todo) {}
