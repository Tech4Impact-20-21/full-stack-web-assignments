/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji
let sisaGaji;
let totalGaji;
totalGaji = 5000000 + (10/100*5000000) + (5/100*5000000);
sisaGaji = totalGaji - (750000+2000000+1000000+250000);
console.log(sisaGaji);


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
let oneInString = "1";
let oneInNumber = 1;
let isSame;
isSame = (oneInString == oneInNumber);
console.log(isSame);


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
let studentA = 75;
let studentB = 80;
let isHigher;
isHigher = (studentA>=studentB);
console.log(isHigher);


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
let final;
final = (oneInString === oneInNumber);
console.log(final);
