/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

function taxCalc(salary) {
    if(salary < 5000000) {
        return salary;
    } else if(salary >= 5000000 && salary < 10000000) {
        return 0.05 * salary;
    } else if (salary >= 10000000 && salary < 20000000) {
        return 0.1 * salary;
    } else if (salary >= 20000000) {
        return 0.2 * salary;
    }
}

console.log(taxCalc(10000000));

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

function checkBMI(height, weight) {
    let bmi = (weight/(height*height)) * 10000;

    if (bmi < 18.5) {
        return "under weight";
    } else if (bmi < 24.9 && bmi > 18.5) {
        return "normal";
    } else if (bmi < 29.9 && bmi > 25) {
        return "over weight";
    } else if (bmi < 34.9 && bmi > 30) {
        return "obese";
    } else if (bmi > 35) {
        return "extermely obese";
    }
}

console.log(checkBMI(159, 45));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

function convToUpperCase(sentence) {
    let new_str = sentence.replace(sentence[0], sentence[0].toUpperCase());

    return new_str;
}

console.log(convToUpperCase('halo saya siapa'));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

function firstNonRepeatedChar(word) {
    if(word.includes(" ")) {
        return "kata tidak boleh dipisah";
    }

    let jumlah_beda = 0;
    let huruf_beda = [];

    for(let i = 0; i < word.length; i++) {
        if(word[i] != word[i+1]) {
            if(word[i] != word[i-1]) {
                huruf_beda[jumlah_beda] = word[i];
                jumlah_beda++;
            }
        }
    }

    if(jumlah_beda == word.length) {
        return "";
    } else {
        // console.log(huruf_beda);
        return huruf_beda[0];
    }
}

console.log(firstNonRepeatedChar("aamm"));