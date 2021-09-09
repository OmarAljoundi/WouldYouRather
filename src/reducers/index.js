import users from "./User";
import questions from "./Question";
import authedUser from "./AuthedUser";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = combineReducers({
  users,
  questions,
  authedUser,
});

const rootPersistConfig = {
  key: "root",
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
};

const persistReducers = persistReducer(rootPersistConfig, reducers);

export default persistReducers;
