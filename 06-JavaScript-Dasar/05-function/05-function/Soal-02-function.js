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
    if (((weight/(height*height)) * 10000) < 18.5){
        return "under weight";
    }
    else if (((weight/(height*height)) * 10000) > 18.5 && ((weight/(height*height)) * 10000) < 24.9){
        return "normal";
    }
    else if (((weight/(height*height)) * 10000) > 25 && ((weight/(height*height)) * 10000) < 29.9){
        return "over weight";
    }
    else if (((weight/(height*height)) * 10000) > 30 && ((weight/(height*height)) * 10000) < 34.9){
        return "obese";
    }
    else if (((weight/(height*height)) * 10000) > 35){
        return "normal";
    }
}

console.info(`checkBMI should be "${checkBMI(170,80)}"`);
console.info(`checkBMI should be "${checkBMI(160,80)}"`);