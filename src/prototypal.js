function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.greeting = function() {
  return `Hi! ${this.name}`;
}

function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender)
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype)
Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true
})

let teacher = new Teacher('vishal', '24', 'male', 'maths');
let person = new Person('vishal', '24', 'male');
console.log(teacher);
console.log(person);
