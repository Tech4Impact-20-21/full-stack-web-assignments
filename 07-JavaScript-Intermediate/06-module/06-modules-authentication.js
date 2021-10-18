export function validateLoginData(email, password) {
    const emailValidator = new RegExp("^[A-Za-z0-9]+[?=@]+[a-z]+[?=.]\w+");
    const passwordValidator = /[A-Za-z\d-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}/;
    const regexCapital = /[A-Z]/
    const regexSmall = /[a-z]/
    const regexNumber = /[0-9]/
    const regexSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/

    let message; 

    if (!email.match(emailValidator)) {
        message = "tolong masukan email yang valid"
        window.alert(message);
    } else if (password.match(passwordValidator) &&
        password.value.match(regexCapital) &&
        password.value.match(regexSmall) &&
        password.value.match(regexNumber) &&
        password.value.match(regexSymbol)) {
        message = "Welcome to The Jungle"
        window.alert(message);
    } else {
        message = "tolong masukan password sesuai ketentuan"
        window.alert(message);
    }

    return message;
}