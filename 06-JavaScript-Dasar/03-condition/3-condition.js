/// Question - 01
/// Check a traveller that will ride a motorcycle:
/// - Using IF ELSE
/// - First condition: check whether the traveller is less than 18 years old
/// - If yes, print "Anda belum cukup umur"
/// - If no,
///   check whether he has got his driver license or not
///   - If yes, print "Selamat berkendara"
///   - If no, print "Diharapkan untuk membuat SIM terlebih dahulu"

const userAge = 18;
const drivingLicense = true;
if(userAge < 18){
    console.log("Anda belum cukup umur");
 } else {
     if(drivingLicense === true){
         console.log("Selamat berkendara");
     } else {
         console.log("Diharapkan untuk membuat SIM terlebih dahulu");
     }
 }



/// Question - 02
/// Write a condition to convert temperature from celcius to the desired type
/// - Using switch case
/// - Convert celcius to kelvin if the user input "K"
/// - Convert celcius to fahrenheit if the user input "F"
/// - Convert celcius to celcius if the user input "C"
/// - Show "Maaf anda salah input", if all the conditions are not met
const temperature = 100; /// suhu
const unit = "F"; /// inputan
switch (unit) {
    case "K":
        result = temperature+273.15;
        console.log(result);
        break;
    case "F":
        result = (temperature*9/5) + 32;
        console.log(result);
        break;
    case "C":
        result = temperature;
        console.log(result);
        break;
    default:
        result = "Maaf anda salah input";
        console.log(result);
        break;
}
