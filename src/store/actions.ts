import { createAction } from "@reduxjs/toolkit";
// export const SetStuffCountActionType = "counter/SET_STUFF_COUNT";
// export const FetchDogActionType = "counter/FETCH_DOG";
// export const RequestDogSuccessActionType = "counter/REQUEST_DOG_SUCCESS";

// export interface IAction<T, P> {
//   readonly type: T;
//   readonly payload?: P;
// }

// export type SetUserNameAction = IAction<typeof SetUserNameActionType, string>;

// export type SetStuffCountAction = IAction<
//   typeof SetStuffCountActionType,
//   number
// >;

// export type FetchDogAction = IAction<typeof FetchDogActionType, string>;

// export type RequestDogSuccessAction = IAction<
//   typeof RequestDogSuccessActionType,
//   string
// >;

// export function createUserNameAction(userName: string): SetUserNameAction {
//   return createAction(SetUserNameActionType, userName);
// }

// export function createStuffCountAction(count: number): SetStuffCountAction {
//   return createAction(SetStuffCountActionType, count);
// }

// export const userActions = {
//   setUser: (name: string) => ({
//     type: "user",
//     name,
//   }),
// };

// export const stuffActions = {
//   setMoney: (money: number) => ({
//     type: "user",
//     money,
//   }),
// };

// export const setStuffCountAction = createAction<number>(
//   SetStuffCountActionType
// );
// export const fetchDogAction = createAction(FetchDogActionType);

// export const requestDogSuccessAction = createAction<string>(
//   RequestDogSuccessActionType
// );
