import {
  CountState,
  CountActionTypes,
  INCREMENT,
  DECREMENT,
} from "../store/types";

const initialState: CountState = {
  count: 0,
};

const counter = function (state = initialState, action: CountActionTypes) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
