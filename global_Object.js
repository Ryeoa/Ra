//object : 키와 값의 쌍으로 이루어지 그룹
//변수, 함수
//객체 = 변수들 + 함수들
//변수의 확장

// let obj1 = new Object();
// let obj2 = {}; //추천

// obj2.name = "홍길동";
// obj2.age = 21;

// let obj3 = {
//   name: "김려아",
//   age: 10,
// };

// console.log(obj3);
// console.log(obj3.name);

// let class1 = {
//   student: [obj1, obj2, obj3],
// };
// class1.student[0].name = "홍길동";
// console.dir(class1);
// console.log(class1.student[0]);
// console.log(class1.student[0].name);
// console.log(class1.student[0].age);

// delete obj1.name;
// console.dir(obj3.name);
// console.log(obj3["name"]);
// console.log(obj3["address 1"]); //연관 배열

// const obj4 = {
//   name: "12",
// };
// obj4.name = {};

// let fruit = prompt("사용하고 싶은 속성 이름", "apple");
// let bag = {
//   [fruit + "Computers"]: 5,
// };
// console.log(bag(fruit));

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user1 = makeUser("John", 30);
let user2 = makeUser("lee", 30);
let user3 = makeUser("Park", 30);
console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
