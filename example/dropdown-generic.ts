// 하나의 인터페이스를 통하여 어러개의 타입을 커버할 수 있음
// 호출 하는 시점에 타입을 정의할 수 있음

interface DropdownItem<T, T1> {
  value: T;
  selected: T1;
}

const emails: DropdownItem<string, boolean>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItem<number, boolean>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(
  item: DropdownItem<string, boolean> | DropdownItem<number, boolean>
) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 제네렉의 타입 제한 1
interface LengthType {
  length: number;
}

function logTextLengh<T extends LengthType>(text: T): T {
  return text;
}

logTextLengh("aaa");
logTextLengh([]);

// 제네릭의 타입 제한2
interface shopItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItem<T extends keyof shopItem>(item: T): T {
  return item;
}
getShoppingItem("stock");
