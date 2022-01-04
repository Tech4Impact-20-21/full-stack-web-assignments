// Soal 1
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
  
//   Jawaban soal 1
//   1. jika kode dijalankan maka outputnya :
//      fun1 { fun1: [Function: fun1], fun2: [Function: fun2] } --> output obj.fun1();
//      fun2 {} --> output obj.fun2();
//   2. tidak sama
//   3. Alasannya :
//   >> pada fun1 yang menggunakan function() terdapat this yang akan mencari ke
//   lexical scopenya (variabel yang didefinisikan di luar fungsi dan dapat diakses 
//   di dalam fungsi lain) atau pada kode dibawah adalah obj, maka nantinya fun 1 
//   akan menampilkan semua value atau isi yang ada pada obj  
//   >> pada fun2 yang menggunakan arrow function atau () => terdapat this yang 
//   tidak akan mencari ke lexical scopenya, karena arrow function tidak memiliki 
//   konsep this. Pada obj tidak memiliki this, maka this akan mencari ke luar function sampai ke window.
//   Jika pada window tidak ada maka akan mengembalikan undefined
//   >> Jadi kesimpulannya adalah pada fun1 akan mencari ke lexical scopenya kemudian berakhir pada object 
//   yaitu obj lalu menampilkan isi dari object tersebut, sedangkan pada fun2 karena tidak memiliki
//   konsep this maka ia akan mencari sampai ke window.



// Soal no 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// jawab soal no 2
// 1. Enkapsulasi adalah pembatasan akses langsung ke property atau method dari sebuah objek
//    enkapsulasi biasanya digunakan untuk membungkus data variable/fungsi sesuai dengan keiinginan programmer terhadap akses dari property(agar tidak ada update dari luar secara langsung dengan sengaja/di luar aksesnya)
// 2. Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
//    Dibutuhkan untuk menyembunyikan detail tertentu dari sebuah objek dan menampilkan fungsionalitas atau fitur penting dari objek tersebut(tidak kelihatan dr luar prosesnya,biasanya hanya hasilnya saja)
// 3. Inherintance adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
//    dengan adanya konsep inherintance, maka class yang mempunyai fungsional/property yang sama dengan parentnya tidak perlu lagi menuliskan codenya secara berulang dan lebih reusable(dipakai kembali)
// 4. Polymorphisme adalah konsep OOP yang memiliki kemampuan dari suatu objek untuk memiliki banyak bentuk
//    Dibutuhkan karena dapat membentuk banyak atribut dengan baik, menumbuhkan modularitas dan usabilitas,serta membuat jenis sistem yang lebih fleksibel dan mudah dibentuk.


// Soal no 3
// Kamu diminta untuk membuat sebuah class dengan spesifikasi sebagai berikut:
// class tersebut benama Phone
// memiliki 3 properties yaitu:
// brand: String
// storage: Number
// ram: Number
// memiliki 4 method yaitu:
// getBrandName [String] => akan mendapatkan isi dari field brand
// setBrandName [void] => akan mengubah nilai dari field brand
// printSpecification [void] => mencetak spesifikasi dari ponsel tersebut dengan format "Ponsel ini memiliki storage: $STORAGE dan ram: $RAM"
// setSpecification [void] => akan mengubah nilai dari field storage dan ram

class Phone {
    constructor(brand, storage, ram) {

        this.brand = brand;
        this.storage = Number(storage);
        this.ram = Number(ram);
    }

    getBrandName() {
        return `${this.brand}`
    }

    setBrandName(brand) {
        this.brand = brand;
    }

    printSpecification() {
        return console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }

    setSpecification(storage, ram) {
        this.storage = storage
        this.ram = ram;
    }

}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Soal No 4
// Kamu diminta untuk membuat beberapa class dengan spesifikasi sebagai berikut:
// Course
// properties:
// subject [String] => nama pelajaran
// quota [Number] => jumlah peserta atau siswa
// attendance [Number] => jumlah minimum kehadiran sebagai syarat untuk mengikuti ujian
// methods:
// getSubject [String] => mengembalikan nama course saat ini
// getAttendance [Number] => mengembalikan attenance course saat ini
// decreaseQuota [void] => mengurangi jumlah quota dengan 1
// CourseOffering
// properties:
// course [String] => mata pelajran yang diambil oleh siswa
// grade [Number] => nilai yang diraih oleh siswa
// attendance [Number] => total kehadiran siswa pada suatu kelas, secara default dia memiliki nilai 0
// Student
// properties:
// name [String] => nama lengkap siswa
// gender [String] => jenis kelamin
// courseOfferings [Array of CourseOffering] => daftar mata pelajaran yang diambil oleh siswa
// methods:
// takeNewCourse [void] => fungsi ini akan menambahkan course yang ingin kita ambil kedalam property courseOfferings, kita tidak boleh mengambil atau menambahkan mata pelajaran yang sudah kita ambil kedalam property courseOfferings
// courseAttendance [void] => menambahkan kehadiran dengan 1 poin
// courseTest [void] => akan memasukan nilai secara acak kedalamm property grade, namun sebelum kita dapat mengambil ujian kita haruslah lolos absensi terlebih dahulu

class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
  
    takeNewCourse(course) {
      if (this.courseOfferings.length === 0) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [courseOffering];
        course.decreaseQuota();
      } else {
        const isAlreadyExist = this.courseOfferings.find(
          (courseOffering) =>
            courseOffering.course.getSubject() === course.getSubject()
        );
  
        if (isAlreadyExist === undefined) {
          const courseOffering = new CourseOffering(course);
          this.courseOfferings = [...this.courseOfferings, courseOffering];
          course.decreaseQuota();
        }
      }
    }
  
    takeATest(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
        this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
      } else {
        console.log(
          `please fill your absen ${course.getSubject()}`
        );
      }
    }
  
    courseAttendance(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      this.courseOfferings[idx].attendance += 1;
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
      this.quota -= 1;
    }
  }
  
  const biology = new Course('biology', 10, 3);
  const physics = new Course('physics', 10, 2);
  
  const johnWatson = new Student('john watson', 'male');
  
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
