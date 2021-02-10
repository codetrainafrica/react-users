//action creator for adding user
export const addUser = (newUser) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add(newUser)
      .then((res) => {
        console.log("user added successfully!", newUser);
      })
      .catch((err) => {
        console.log("Sorry, something went wrong", err);
      });
  };
};

//action creator for deleting user
export const deleteUser = (userId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {
        console.log("User deleted successfully!");
      })
      .catch((err) => {
        console.log("Sorry, something went wrong", err);
      });
  };
};

//action creator for editing user
export const editUser = (updatedUser) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(updatedUser.id)
      .update(updatedUser)
      .then(() => {
        console.log("User updated successfully!");
      })
      .catch((err) => {
        console.log("Sorry, something went wrong", err);
      });
  };
};
