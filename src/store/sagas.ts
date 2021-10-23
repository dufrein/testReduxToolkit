import { takeLatest, put, call, all } from "redux-saga/effects";

import { requestDogSuccess, fetchDog } from "./reducers";
// Action Creators

// const requestDogSuccess = (data: any) => {
//   return { type: RequestDogSuccessActionType, payload: data.message };
// };

// export const fetchDog = () => {
//   return { type: fetchDogAction };
// };

function* workerSaga(): any {
  try {
    const data = yield call(() => {
      return fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data));
  } catch (error) {
    console.log("error while fetch api", error);
  }
}

export function* rootSaga() {
  yield all([takeLatest(fetchDog.toString(), workerSaga)]);
}
