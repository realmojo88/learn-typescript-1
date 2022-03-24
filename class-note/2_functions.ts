// 함수의 파라미터의 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10));

function log(a: string, b?: string, c?: string) {
  console.log(a);
}

log("test", "ss");
