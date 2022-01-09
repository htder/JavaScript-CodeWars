function filter_list(list) {
  return list.filter((value) => typeof value === "number");
}

function filter_list1(list) {
  return list.filter((value) => Number.isInteger(value));
}

console.log(filter_list1([1, 2, "a", "b"]));
console.log(filter_list1([1, "a", "b", 0, 15]));
console.log(filter_list1([1, 2, "aasf", "1", "123", 123]));
