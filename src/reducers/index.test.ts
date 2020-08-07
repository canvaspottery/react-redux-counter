import counter from "./index";
import { NOTHING, INCREMENT, DECREMENT } from "../store/types";

describe("reducers", () => {
  describe("counter", () => {
    it("should provide the initial state", () => {
      expect(counter(undefined, { type: NOTHING })).toEqual({ count: 0 });
    });

    it("should increment the count", () => {
      expect(counter(undefined, { type: INCREMENT })).toEqual({ count: 1 });
    });

    it("should decrement the count", () => {
      expect(counter({ count: 10 }, { type: DECREMENT })).toEqual({ count: 9 });
    });
  });
});
