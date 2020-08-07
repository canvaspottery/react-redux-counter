export interface CountState {
  count: number;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const NOTHING = "NOTHING";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface NothingAction {
  type: typeof NOTHING;
}

export type CountActionTypes =
  | IncrementAction
  | DecrementAction
  | NothingAction;
