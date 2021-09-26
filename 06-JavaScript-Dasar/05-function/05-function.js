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

/// EDIT HERE
function taxCalc(salary) { 
    if (salary < 5000000){
        return 0;
    } else if(salary >= 5000000 && salary < 10000000){
        return (5/100*salary);
    } else if(salary >= 10000000 && salary < 20000000){
        return (10/100*salary);
    } else if (salary >= 20000000){
        return (20/100*salary);
    }
}
//expected result
console.log(taxCalc(4500000));
console.log(taxCalc(5000000));
console.log(taxCalc(20000000));

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

/// EDIT HERE
function checkBMI(height, weight) {
    let bmi = (weight/(height*height))*10000;
    let hasil;
    if (bmi<18.5){
        hasil = "under weight";
    } else if (bmi > 18.5 && bmi <= 24.9){
        hasil = "normal";
    } else if (bmi > 25 && bmi <= 29.9){
        hasil = "over weight";
    } else if (bmi > 30 && bmi <= 34.9){
        hasil = "obese";
    } else if(35 <= bmi){
        hasil = "extremely obese";
    }
    return hasil;
}
//expected result
console.log(checkBMI(170,80));
console.log(checkBMI(160,80));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(words) {
    result=words.split(" ");
    for (let i=0; i<result.length; i++){
        charge=result[i].toUpperCase();
        result[i]=charge.charAt(0)+result[i].substring(1);
    }
    let newResult="";
    for (let i=0; i<result.length; i++){
        newResult= newResult+result[i]+" ";
    }
    return newResult;
}
//expected result
console.log(convToUpperCase("hello bandung"));
console.log(convToUpperCase("helloworldwide"));
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

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let letter;
        for (let i=0; i<word.length; i++){
        letter=word[i];
        if (letter==" "){
            return "kata tidak boleh dipisah";
            }
        }

        for (let i=0; i<word.length; i++){
        letter=word[i];
        let check=false;
        for (let j=0; j<word.length; j++){
            if (letter==word[j] && j!=i){
                check=true;
                break;
            }
        }
        if (check==false){
            return letter;
            break;
        }
        }
        return "";
}
//expected result
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohowh"));