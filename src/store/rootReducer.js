import { combineReducers } from "redux";

const usersState = {
    users: [],
    loading: true
}



const usersReducer = (state = usersState, actions) => {
    switch (actions.type) {
        case 'users/get':
          return {
            ...state,
            users: actions.payload,
            loading: false,
          };
        case 'user/add':
          return {
            ...state,
            users: [...state.users, actions.payload], 
          };
        default:
          return state;
      }
}


const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer