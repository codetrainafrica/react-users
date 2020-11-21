const initialState = {
  users: [
    { name: "Zak", email: "zak@email.com", gen: 12 },
    { name: "Awal", email: "awal@email.com", gen: 22 },
    { name: "Tony", email: "tony@email.com", gen: 13 },
  ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
                return state;
    
        default:
            return state;
    }
};

export default usersReducer;
