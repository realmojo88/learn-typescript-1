function fetchItems(): string[] {
  let items = ["a", "b", "c"];
  return items;
}

let result = fetchItems();

console.log(result);

function fetchItemsAsync() {
  let items = ["a", "b", "c"];
  return new Promise((resolve) => {
    resolve(items);
  });
}
