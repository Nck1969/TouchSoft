// JS

// #1

function normalCase(string) {
  return [...string].reduce((s, e, i) => {
    if (i === 0) {
      s += e.toUpperCase();
      return s;
    }
    s += e.toLowerCase();
    return s;
  });
}

// #2

function sayHello(name) {
  switch (name) {
    case "Mark":
      return "Hi, Mark!";
      break;
    default:
      return `Hello, ${name}}!`;
  }
}

// #3

function filterString(array, lengthOfString) {
  return array.filter((item) => item.length <= lengthOfString);
}
