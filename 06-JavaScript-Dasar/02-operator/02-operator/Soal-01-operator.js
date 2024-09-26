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
const pengeluaran = 750000 + 2000000 + 1000000 + 250000;
const gaji_total = 5000000 + (0.1 * 5000000) + (0.05 * 5000000);
const sisaGaji = gaji_total - pengeluaran;
console.info(sisaGaji);