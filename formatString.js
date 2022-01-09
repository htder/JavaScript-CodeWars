function list(names) {
  if (names.length === 1) return names[0].name;
  let listOfNames = "";
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 2) {
      listOfNames += `${names[i].name} & `;
      continue;
    }
    if (i === names.length - 1) {
      listOfNames += `${names[i].name}`;
      continue;
    }
    listOfNames += `${names[i].name}, `;
  }
  return listOfNames;
}

function list1(names) {
  return names
    .map((object) => object.name)
    .reduce((previous, current, index, array) => {
      if (index === 0) return current;
      if (index === array.length - 1) return `${previous} & ${current}`;
      return `${previous}, ${current}`;
    }, "");
}

console.log(
  list1([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);
console.log(
  list1([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
  ])
);
console.log(list1([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
console.log(list1([{ name: "Bart" }, { name: "Lisa" }]));
console.log(list1([{ name: "Bart" }]));
console.log(list1([]));
