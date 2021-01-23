import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";

// new imports
import firebase from '../firebase/firebase';
import { getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import { getFirestore, reduxFirestore} from 'redux-firestore';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  usersState: usersReducer,
  auth: authReducer,
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);
