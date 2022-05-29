const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

// 개발자 도구 - Break on - attribute modifications 확인
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "🚀");

// Styled
console.log(
  "%cI am some great text",
  "font-size: 20px; background: orange; text-shadow: 1px 1px 0 gray;"
);

// warning!
console.warn("OH NOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`); // * groupCollapsed는 닫힌 채로 출력
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name} ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("West");
console.count("Wes");
console.count("West");
console.count("West");
console.count("Wes");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });

// table
console.table(dogs);
