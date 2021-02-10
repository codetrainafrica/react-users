export const signUp = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCreds) => {
        console.log("User created successfully", userCreds);
      })
      .catch((err) => console.log("Something went wrong", err));
  };
};

export const loginUser = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCreds) => {
        console.log("User signed in successfully", userCreds);
      })
      .catch((err) => console.log("Something went wrong", err));
  };
};

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.logout()
  }
}
