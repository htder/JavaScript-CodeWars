function openOrSenior(data) {
  return data.map((arr) => (arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open"));
}

function openOrSenior1(data) {
  const information = [];
  data.forEach((arr) => {
    if (arr[0] >= 55 && arr[1] > 7) {
      information.push("Senior");
    } else {
      information.push("Open");
    }
  });
  return information;
}

function openOrSenior2(data) {
  const information = [];
  data.forEach((arr) =>
    arr[0] >= 55 && arr[1] > 7
      ? information.push("Senior")
      : information.push("Open")
  );
  return information;
}
