const Validation = (email, password, name, isSignUp) => {
    const nameRegex = /^[A-Za-z][A-Za-z' -]{0,48}[A-Za-z]$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const isNameValid = isSignUp ? nameRegex.test(name) : true;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    console.log(`Name valid: ${isNameValid}`);
    console.log(`Email valid: ${isEmailValid}`);
    console.log(`Password valid: ${isPasswordValid}`);

    if (!isNameValid) return 'Name is not valid';
    if (!isEmailValid) return 'Email is not valid';
    if (!isPasswordValid) return 'Password is not valid';

    return null;
};

export default Validation;
