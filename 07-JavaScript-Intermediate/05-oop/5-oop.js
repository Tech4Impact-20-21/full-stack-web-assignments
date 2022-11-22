// Question - 01
// Analyze these questions:
// 1. What will happen if these codes are executed?
// 2. Will the result of fun1 & fun2 the same?
// 3. What is the reason of number 2?
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
obj.fun1();
obj.fun2();

// Answers:
// 1. `obj.fun1()` will return "fun1" & `obj` object. However the `obj.fun2()` will return "fun2" & the window.
// 2. No.
// 3. Since this in regular functions represents the object that called the function. However this in arrow functions always represents the object that defined the arrow function.

// Question - 02
// 1. What is Encapsulation? Why do we need it?
// 2. What is Abstraction? Why do we need it?
// 3. What is Inheritance? Why do we need it?
// 4. What is Polymorpishm? Why do we need it?

// Answers:
// 1. Encapsulation : wrapping up of data under a single unit (prevents the data from being accessed by the code outside it). We need it for data hiding, increasing flexibility, reusability, easiness of testing code.
// 2. Abstraction : identifying only the required characteristics of an object & ignoring the irrelevant details. We need it to reduce complexity of viewing things, avoids code duplication & increase reusability, increase the security of a program.
// 3. Inheritance : some property and method of an Object is used by another Object. We need it to avoid duplicating code in many objects.
// 4. Polymorpishm : provides a way to perform a single action in different forms. We need it to foster modularity and reusability and makes the type system more flexible and malleable.

// Question - 03
class Phone { 
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = Number(storage);
        this.ram = Number(ram);
    }
    getBrandName(){
        return this.brand;
    }
    setBrandName(new_brand){
        this.brand = new_brand;
    }
    printSpecification(){
        return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`;
    }
    setSpecification(new_storage, new_ram){
        this.storage = Number(new_storage);
        this.ram = Number(new_ram);
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Question - 04
class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
  }
    
  takeNewCourse(course) {
    if(this.courseOfferings.includes(course) === false){
      this.courseOfferings.push(new CourseOffering(course));
      course.decreaseQuota();
    }
  }
    
  takeATest(course) {
    for(let i=0; i< this.courseOfferings.length; i++){
      if(this.courseOfferings[i].course.subject === course.subject){
        if(this.courseOfferings[i].attendance >= course.attendance){
          this.courseOfferings[i].grade = Math.floor(Math.random()*101)
        } else{
          console.log(`Sorry, you can't attend ${course.subject} test since your attendance in this class is lower than the minimum attendance.`)
        }
      }
    }
  }
    
  courseAttendance(course) {
    for(let i=0; i< this.courseOfferings.length; i++){
      if(this.courseOfferings[i].course.subject === course.subject){
        this.courseOfferings[i].attendance +=1
      }
    }
  }
}
  
class CourseOffering {
  constructor(course, grade){
    this.course = course;
    this.grade = grade;
    this.attendance = 0;
  }
}
  
class Course {
  constructor(subject, quota, attendance){
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }

  getSubject(){
    return this.subject;
  }

  getAttendance(){
    return this.attendance;
  }

  decreaseQuota(){
    this.quota-=1;
  }
}
  
  
const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
  