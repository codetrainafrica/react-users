//action creator for adding user
export const addUser = (newUser) => {
    newUser.id = Math.random().toString();
    return {
        type: "ADD_USER",
        payload: newUser
    }
}



