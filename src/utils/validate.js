export const checkValidSignIn = (email, password,name=false) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simplified but accurate email regex
    const isPassValid = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,15}$/.test(password); // Ensures at least one digit, one letter, one special character, and length between 6-15

    
    if (!isEmailValid) return "Email ID is Not Valid";
    if (!isPassValid) return "Password is Not Valid";
  
    return null;
  };
export const checkValidSignUp = (email, password,name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simplified but accurate email regex
    const isPassValid = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,15}$/.test(password); // Ensures at least one digit, one letter, one special character, and length between 6-15
    let isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name)

    if(!isNameValid) return "Name is not valid"
    if (!isEmailValid) return "Email ID is Not Valid";
    if (!isPassValid) return "Password is Not Valid";
  
    return null;
  };
  
