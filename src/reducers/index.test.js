import rootReducer from "./";

describe("rootReducer", () => {
  it("initialises the default state", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
