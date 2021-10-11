export default function validateLoginData(email, password){
    const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const passPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#$%^&*.])(?=.{8,})")
    if(emailPattern.test(email)){
        if(passPattern.test(password)){
            return 'Welcome to The Jungle';
        } else{
            return 'tolong masukkan password sesuai ketentuan';
        }
      } else {
        return 'tolong masukkan email yang valid';
      }
}