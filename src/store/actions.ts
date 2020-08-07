import { INCREMENT, DECREMENT, CountActionTypes } from "./types";

export function increment(): CountActionTypes {
  return {
    type: INCREMENT,
  };
}

export function decrement(): CountActionTypes {
  return {
    type: DECREMENT,
  };
}
