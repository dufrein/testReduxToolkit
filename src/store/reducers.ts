import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export interface IStore {
  user: IUserState;
  stuff: IStuffState;
}

const InitialUserState: IUserState = { userName: "" };
const InitialStuffState: IStuffState = { count: 0, url: "", isLoading: false };

interface IUserState {
  userName: string;
}

interface IStuffState {
  count: number;
  url: string;
  isLoading: boolean;
}

// const userReducer = (state: IUserState = InitialUserState, action: Actions) => {
//   switch (action.type) {
//     case SetUserNameActionType:
//       return { ...state, userName: action.payload };
//     default:
//       return state;
//   }
// };

const userReducer = createSlice({
  name: "user",
  initialState: InitialUserState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});
// const stuffReducer = (
//   state: IStuffState = InitialStuffState,
//   action: Actions
// ) => {
//   switch (action.type) {
//     case SetStuffCountActionType:
//       return { ...state, count: action.payload };
//     case RequestDogSuccessActionType:
//       return { ...state, url: action.payload };
//     default:
//       return state;
//   }
// };

const stuffReducer = createSlice({
  name: "stuff",
  initialState: InitialStuffState,
  reducers: {
    setStuffCount: (state, action) => {
      state.count = action.payload;
    },
    fetchDog: (state) => {
      state.isLoading = true;
    },
    requestDogSuccess: (state, action) => {
      state.url = action.payload.message;
      state.isLoading = false;
    },
  },
});

export const rootReducer = combineReducers({
  user: userReducer.reducer,
  stuff: stuffReducer.reducer,
});

const { setUserName } = userReducer.actions;
const { setStuffCount, requestDogSuccess, fetchDog } = stuffReducer.actions;

export { setUserName, setStuffCount, fetchDog, requestDogSuccess };
