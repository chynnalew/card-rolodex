import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firestore: firestoreReducer
});