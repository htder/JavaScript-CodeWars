function updateLight(current) {
  const lights = ["green", "yellow", "red"];
  const value = lights.indexOf(current);
  return lights[value] === "red" ? "green" : lights[value + 1];
}
