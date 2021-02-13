export const signupUser = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCreds) => console.log("User created successfully", userCreds))
      .catch((err) => console.log("Sorry, something went wrong!", err));
  };
};

export const loginUser = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log("User logged in successfully!", user))
      .catch((err) => console.log("Sorry, something went wrong!", err));
  };
};

export const logoutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .logout()
      .then(() => console.log("User logged out successfully!"))
      .catch((err) => console.log("Sorry, something went wrong!", err));
  };
};
