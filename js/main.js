const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const form = document.querySelector("form#form");
const output = document.querySelector("#output");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number`);
  }
  showMessage(`${numberToCheck} is not that lucky`);
};

const showMessage = (message) => {
  output.innerText = message;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});
