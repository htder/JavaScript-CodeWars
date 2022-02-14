function domainName(url) {
  if (url.includes("http") && url.includes("www")) {
    return url.split("/")[2].split(".")[1];
  }
  if (url.includes("http")) {
    return url.split("/")[2].split(".")[0];
  }
  if (url.includes("www")) {
    return url.split(".")[1];
  }
  return url.split(".")[0];
}

function domainName1(url) {
  return url.replace("https://", "")
            .replace("http://", "")
            .replace("www.", "")
            .split(".")[0];
}

console.log(domainName1("www.xakep.ru"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://google.com"));
