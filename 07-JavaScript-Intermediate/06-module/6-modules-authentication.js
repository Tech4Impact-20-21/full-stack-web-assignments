/**
 * @param {String} email
 * @param {String} password
 */


export default function validateLoginData(email, password){
    let emailValidation = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let passValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    if(emailValidation.test(email)){
        if(passValidation.test(password)){
            return 'Welcome to The Jungle';
        } else{
            return 'tolong masukkan password sesuai ketentuan';
        }
      } else {
        return 'tolong masukkan email yang valid';
      }
}