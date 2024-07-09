const expContainer = document.getElementById("expContainer");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const mulBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const num1 = document.getElementById("No1");
const num2 = document.getElementById("No2");
const num3 = document.getElementById("No3");
const num4 = document.getElementById("No4");
const num5 = document.getElementById("No5");
const num6 = document.getElementById("No6");
const num7 = document.getElementById("No7");
const num8 = document.getElementById("No8");
const num9 = document.getElementById("No9");
const num0 = document.getElementById("No0");
const pointBtn = document.getElementById("point");
const resultBtn = document.getElementById("equals");
const resetBtn = document.getElementById("reset");
const delBtn = document.getElementById("DEL");
const leftBracket = document.getElementById("leftBracket");
const rightBracket = document.getElementById("rightBracket");

let numbers = [];
let sum;
let resetResult = false;

function caseHandler(sign) {
  expContainer.setAttribute("placeholder", sign);
  console.log(expContainer.value);
  let currentSign;
  currentSign = numbers[numbers.length - 1] === "+" ? "+" : null;
  currentSign = numbers[numbers.length - 1] === "-" ? "-" : null;
  currentSign = numbers[numbers.length - 1] === "/" ? "/" : null;
  currentSign = numbers[numbers.length - 1] === "*" ? "*" : null;

  if (numbers[numbers.length - 1] !== sign && expContainer.value !== "") {
    numbers.push(expContainer.value);
    expContainer.value = sign;
    numbers.push(expContainer.value);
    expContainer.value = "";
  } else if (
    numbers[numbers.length - 1] === sign &&
    expContainer.value !== ""
  ) {
    numbers.push(expContainer.value);
    numbers.push(sign);
    expContainer.value = "";
  }

  if (
    currentSign !== sign &&
    numbers.length &&
    isNaN(numbers[numbers.length - 1])
  ) {
    console.log(currentSign);
    if (currentSign === "*") {
      numbers.push(sign);
    } else {
      numbers.pop();
      numbers.push(sign);
    }
    // if (currentSign !== "*" && currentSign !== "/") {
    // } else if (currentSign === "+") {
    //   numbers.pop();
    //   numbers.push(sign);
    // } else if (currentSign === "-") {
    //   numbers.pop();
    //   numbers.push(sign);
    // }
  }
}

function zeroHandler() {
  if (expContainer.value === "0") {
    expContainer.value = "";
  }
}

num1.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 1;
  // if(isNaN(numbers[numbers.length - 1]) && numbers.length) {
  //   console.log('first')
  //   console.log(numbers)
  //   sum = numbers.join(" ")
  //   const result = math.evaluate(sum)
  //   expContainer.value = result;
  // }
});

num2.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 2;
});

num3.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 3;
});

num4.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 4;
});

num5.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 5;
});

num6.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 6;
});

num7.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();
  expContainer.value += 7;
});

num8.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();

  expContainer.value += 8;
});

num9.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();

  expContainer.value += 9;
});

num0.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();

  expContainer.value += 0;
});

pointBtn.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();

  expContainer.value += ".";
});

addBtn.addEventListener("click", () => {
  if (expContainer.value.includes("(") && !expContainer.value.includes(")")) {
    expContainer.value += "+";
  } else {
    caseHandler("+");
  }
  resetResult = false;
  console.log(numbers);
});

subBtn.addEventListener("click", () => {
  if (expContainer.value.includes("(") && !expContainer.value.includes(")")) {
    expContainer.value += "-";
  } else {
    caseHandler("-");
  }
  resetResult = false;
});

divBtn.addEventListener("click", () => {
  if (expContainer.value.includes("(") && !expContainer.value.includes(")")) {
    expContainer.value += "/";
  } else {
    caseHandler("/");
  }
  resetResult = false;
});

mulBtn.addEventListener("click", () => {
  if (expContainer.value.includes("(") && !expContainer.value.includes(")")) {
    expContainer.value += "*";
  } else {
    caseHandler("*");
  }
  resetResult = false;
});

resetBtn.addEventListener("click", () => {
  expContainer.value = 0;
  numbers = [];
  expContainer.setAttribute("placeholder", "");
});

resultBtn.addEventListener("click", (e) => {
  numbers.push(expContainer.value);
  console.log(numbers);
  if (
    numbers[numbers.length - 1] !== "+" &&
    numbers[numbers.length - 1] !== "-" &&
    numbers[numbers.length - 1] !== "/" &&
    numbers[numbers.length - 1] !== "*" &&
    numbers[numbers.length - 1] !== ""
  ) {
    sum = numbers.join(" ");
    expContainer.value = math.evaluate(sum);
    console.log(sum);
    resetResult = true;
    numbers = [];
  }
});

delBtn.addEventListener("click", (e) => {
  let currentVal = expContainer.value;
  currentVal = (currentVal / 10) | 0;
  expContainer.value = currentVal;
});

leftBracket.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }
  zeroHandler();

  expContainer.value += "(";
});

rightBracket.addEventListener("click", () => {
  if (resetResult) {
    expContainer.value = "";
    resetResult = false;
  }

  if (expContainer.value.includes("(")) {
    zeroHandler();
    expContainer.value += ")";
  }
});
