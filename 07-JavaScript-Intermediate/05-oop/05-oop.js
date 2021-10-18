// 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
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

/*
1. fun1 mengembalikan objek yang memilikinya (obj).
   fun2 tidak mengembalikan apa-apa.
   output:
   fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
   fun2 {}
2. Hasil keduanya berbeda
3. Karena, this pada arrow function akan sama dengan value dari fungsi diluarnya (fungsi yang membungkusnya).
   Pada kasus ini, fun2 tidak memiliki fungsi di luarnya, sehingga nilai this kosong.
*/

// 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

/*
1. Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
Agar program tidak dapat diakses secara sembarangan oleh program lain.
2. Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek
dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut. Untuk menjaga data yang sensitif agar
method tersebut tidak dipanggil kecuali hanya dari lingkup kelas itu.
3. Inheritance adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
Mempermudah reusability kode tanpa harus mengetik ulang.
4. Polymorphism adalah kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk.
Pada konsep ini, satu variable dapat didefinisikan dengan banyak cara sehingga kode lebih sederhana.

sumber: https://medium.com/codeacademia/belajar-fundamental-opp-dengan-javascript-c1b721677ce9
*/

// 03
class Phone {
  constructor(brand, storage, ram){
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }

  getBrandName(){
    return `${this.brand}`;
  }

  setBrandName(newBrand){
    this.brand = newBrand;
  }

  printSpecification(){
    console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
  }

  setSpecification(newStorage, newRam){
    this.storage = newStorage;
    this.ram = newRam;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// 04
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }
  
  takeNewCourse(newCourse) {
      this.courseOfferings.push(new CourseOffering(newCourse));
      newCourse.decreaseQuota();
  }
  
  takeATest(newCourse) {
    this.courseOfferings.forEach(function(course){
      if(course.attendance >= newCourse.getAttendance()){
        course.grade = Math.floor(Math.random() * 100);
      } else {
        console.log("please fill your absen");
      }
    })
  }
  
  courseAttendance(newCourse) {
    this.courseOfferings.forEach(function(course){
      if(course.course.getSubject() == newCourse.getSubject()){
        course.attendance += 1;
      }
    })
  }

  // getCourse(){
  //   console.log(this.courseOfferings);
  // }
}

class CourseOffering {
  constructor(course){
    this.course = course;
    this.grade = 0;
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
    return `${this.subject}`;
  }

  getAttendance(){
    return `${this.attendance}`;
  }

  decreaseQuota(){
    this.quota -= 1;
  }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

// johnWatson.getCourse();

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
