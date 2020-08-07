export interface CountState {
  count: number;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type CountActionTypes = IncrementAction | DecrementAction;
