// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// ? Array.prototype.some() : 하나라도 만족하는 게 있는가

// is at least one person 19 or older?
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });

// ? Array.prototype.every() : 모든 원소가 만족하는가

// is everyone 19 or older?
const allAdult = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ allAdult });

// ? Array.prototype.find() : 조건을 만족하는 원소 하나 반환
// ? Find is like filter, but instead returns just the one you are looking for

// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);

console.log(comment);

// ? Array.prototype.findIndex() : 해당 조건을 만족하는 원소의 index를 반환
// ? Find the comment with this ID

// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);

console.log(index);

console.table(comments);
// * delete element : splice(인덱스, 개수)
// * 1. 원본에서 바로 삭제
// comments.splice(index, 1);

// * 2. 잘라서 새로운 배열에 저장 => Redux에서 이용
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.table(newComments);
