//action creator for adding user
export const addUser = (newUser) => {
  // newUser.id = Math.random().toString();
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("users").add(newUser).then(res => {
      console.log("user added");
    }).catch(err => {
      console.log("there was an error");
    })
  }
};

//action creator for deleting user
export const deleteUser = (userId) => {
  return (dispatch , getState, {getFirestore}) =>{
    const db = getFirestore();
    db.collection("users").doc(userId).delete()
    .then(res =>{
      console.log("deleted successfully")
    })
    .catch(err =>{
      console.log("error occured")
    })
  }
};



//action creator for editing user
export const editUser = (updatedUser) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("users").doc(updatedUser.id).set(updatedUser)
    .then(res => {
      console.log("User Updated Sucessufully")
    })
    .catch(err => {
      console.log("User couldn't Update")
    })
  }
};
