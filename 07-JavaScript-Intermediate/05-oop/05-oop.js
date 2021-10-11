//Soal no 1.
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

/**Jawaban :
1. Keduanya dapat berjalan dan menghasilkan output
    obj.fun1() -> "fun1" Object { fun1: Object {  }, fun2: Object {  } }
    obj.fun2() -> kosong
2. Hasil yang didapatkan berbeda.
3. Hasil ketika dijalankan berbeda karena pada fun2 tidak dideklarasikan dengan benar */


//Soal no 2.
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/** Jawaban :
1. Encapsulation adalah attribute atau method didalam class dibungkus dan bersifat privat.
    Dibutuhkan agar dapat mencegah perubahan yang tidak sengaja terjadi
2. Abstraction adalah teknik untuk menyembunyikan detail tertentu dari sebuah objek atau method.
    Dibutuhkan untuk menyembunyikan hal yang tidak terlalu penting dan fokus pada objek yang penting.
3. Inheritance adalah pewarisan yaitu mewariskan karakteristik dari parent ke child
    Dibutuhkan agar code lebih reusable.
4. Polymorposhm adalah objek yang dapat memiliki bentuk atau implementasi yang berbeda pada satu metode yang sama.
    Dibutuhkan ketika membuat dua fungsi yang sama namun berbeda oarameternya.
*/


//Soal no 3.
class Phone {
    constructor(brand, storage, ram) {
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }

    getBrandName() {
        return this.brand
    }

    setBrandName(neww) {
        this.brand = neww;
    }

    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }

    setSpecification(storage, ram) {
        this.storage = storage;
        this.ram = ram ;
    }
}
const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


//Soal no 4.
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
  
    getIndexFromCourse(course) {
      const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
        return courseOffering.course.getSubject() === course.getSubject();
      });
      return indexOfCourse;
    }
    
    takeNewCourse(course) {
      // check if course already in array
      const isCourseExist = this.courseOfferings.find((courseOffering) => {
        return courseOffering.course.getSubject() === course.getSubject();
      });
  
      // push the course into array if the course not exist yet
      if (this.courseOfferings.length === 0 || !isCourseExist) {
        this.courseOfferings.push(new CourseOffering(course));
        course.decreaseQuota();
      }
    }
    
    courseAttendance(course) {
      const indexOfCourse = this.getIndexFromCourse(course);
      if (indexOfCourse >= 0) {
        this.courseOfferings[indexOfCourse].attendance++;
      }
    }
  
    takeATest(course) {
      const indexOfCourse = this.getIndexFromCourse(course);
      if (indexOfCourse >= 0) {
        if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
          this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
        } else {
          console.log("please fill your absent");
        }
      }
    }
  }
  
  class CourseOffering {
    constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
    }
  }
  
  class Course {
    constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
    }
    getSubject() {
      return this.subject;
    }
    getAttendance() {
      return this.attendance;
    }
    decreaseQuota() {
      this.quota--;
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