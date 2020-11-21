const initialState = {
  users: [
    {
      name: "Ahmed Zaky",
      email: "ahmed@email.com",
      gen: 12,
      id: "049030kjlksk34",
    },
    {
      name: "Ricardo Brandt",
      email: "ricardo@email.com",
      gen: 1,
      id: "ksdlf03490349",
    },
    {
      name: "Adwoa Comfort",
      email: "adwoa@email.com",
      gen: 15,
      id: "ksldj0349-0359",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
                console.log(action.payload)
                return {...state, users: [...state.users, action.payload]};
    
        default:
            return state;
    }
};

export default usersReducer;
