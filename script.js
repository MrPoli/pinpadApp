const input = document.querySelector("#input");
const one = { button: document.querySelector("#one"), number: "1" };
const two = { button: document.querySelector("#two"), number: "2" };
const three = { button: document.querySelector("#three"), number: "3" };
const four = { button: document.querySelector("#four"), number: "4" };
const five = { button: document.querySelector("#five"), number: 5 };
const six = { button: document.querySelector("#six"), number: 6 };
const seven = { button: document.querySelector("#seven"), number: 7 };
const eight = { button: document.querySelector("#eight"), number: 8 };
const nine = { button: document.querySelector("#nine"), number: 9 };
const deleteButton = document.querySelector("#delete");
const zero = { button: document.querySelector("#zero"), number: 0 };
const checkButton = document.querySelector("#check");

const rightPin = "1234";
let userAddedPin = "";

const numbersButtonsTab = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
];

var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
  location.reload(true);
}

const preventKeyboardInput = (event) => {
  event.preventDefault();
};

for (const el of numbersButtonsTab) {
  el.button.addEventListener("click", () => {
    if (userAddedPin.length < 4) {
      input.value += "*";
      userAddedPin += el.number;
      console.log(userAddedPin);
    }
  });
}

deleteButton.addEventListener("click", () => {
  userAddedPin = userAddedPin.slice(0, -1);
  input.value = input.value.slice(0, -1);
  input.style.backgroundColor = "white";
  console.log(userAddedPin);
});

checkButton.addEventListener("click", () => {
  if (userAddedPin == rightPin) {
    location.href = "dashboard.html";
  } else if (userAddedPin != rightPin) {
    input.style.backgroundColor = "red";
  }
});
