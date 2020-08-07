import { increment, decrement } from "./actions";
import { INCREMENT, DECREMENT } from "./types";

describe("count actions", () => {
  it("should return an INCREMENT payload", () => {
    expect(increment()).toEqual({
      type: INCREMENT,
    });
  });

  it("should return an DECREMENT payload", () => {
    expect(decrement()).toEqual({
      type: DECREMENT,
    });
  });
});
