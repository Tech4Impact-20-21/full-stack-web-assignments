/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

function convToUpperCase(sentence) {
    let array = [];
    let huruf = "";
    for (let i = 0; i <= sentence.split(" ").length-1; i++){
        array[i] = sentence.split(" ")[i];
    }
    for (let j = 0; j <= array.length-1 ; j++){
        for(let k=0; k<= array[j].length-1; k++){
            if (k === 0){
                huruf += array[j][k].toUpperCase();
            }
            else if (k === array[j].length-1){
                huruf += array[j][k] + " ";
            }
            else {
                huruf += array[j][k];
            }
        }
    }
    return huruf;
}
console.info(convToUpperCase("hello bandung"));
console.info(convToUpperCase("helloworldwide"));