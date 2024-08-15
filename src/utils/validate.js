export const checkValidData = (name, email, password) => {
  const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isUsernameValid) return "Username is not valid !!";
  if (!isEmailValid) return "Incorrect Email Id !!";
  if (!isPasswordValid) return "Password is not valid !!";
  return null;

  /* return !isEmailValid
    ? "Incorrect Email Id !!"
    : !isPasswordValid
    ? "Password is not valid !!"
    : null; */
};
