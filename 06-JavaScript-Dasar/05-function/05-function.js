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

function taxCalc(salary){
    let pajak =0;
    if (typeof salary !== "number"){
        return "Your input is not a number";
    }
    if (salary >= 20000000){
        pajak = (salary*0.2);
    } else if(salary >= 10000000 && salary < 20000000){
         pajak = (salary*0.1);
     } else if(salary >= 5000000 && salary < 10000000){
        pajak = (salary*0.05);
     } else {
        pajak =0;
     }
     return pajak;
}

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
function checkBMI(weight,height){
    let bmi = (weight / Math.pow(height,2)) * 10000
    let kategoribmi = "";
    if ((typeof weight !== "number") || (typeof height !== "number")){
        return "Your input is not a number";
    }
    if (bmi >= 35){
        kategoribmi = "extremely obese"
    } else if(bmi > 30 && bmi < 34.9){
        kategoribmi = "obese"
     } else if(bmi > 25 && bmi < 29.9){
        kategoribmi = "over weight"
     } else if(bmi > 18.5 && bmi < 24.9){
        kategoribmi = "normal"
     } else {
        kategoribmi = "underweight"
     }
     return kategoribmi;
}

console.log(checkBMI(80,160))
console.log(checkBMI(80,170))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE

function convToUpperCase(sentence) {
    let hasil = ""
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" ");
    for(let kata = 0; kata < sentence.length; kata++){
        sentence[kata] = sentence[kata].charAt(0).toUpperCase() + sentence[kata].slice(1);
    }
    hasil = sentence.join(" ");
    return hasil;
}
console.log(convToUpperCase("hai ghina fairuz"));
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
// function firstNonRepeatedChar(....) { .... }
function firstNonRepeatedChar(word) { 
    let arr = [];
    if(word.includes(" ")){
        return "kata tidak boleh dipisah";
    }
    for(let i = 0; i<word.length ; i++){
        if(word[i] == " "){
            return "kata tidak boleh dipisah";;
        }
        if(!arr[word[i]]){
            arr[word[i]] = 1;
        }
        else{
            arr[word[i]]++;
        }
    }
    for(let i = 0; i<word.length; i++){
        if(arr[word[i]]==1){
            return word[i];
        }
    }
    return "";
}

console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("wooohoowh"));
