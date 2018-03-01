import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";
import * as actions from "../actions/balance";

describe("balanceReducer", () => {
  describe("when initialising", () => {
    const balance = 10;
    it("sets the balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("then reinit", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it("deposits into the balance", () => {
    const deposit = 20;
    const initialState = 5;

    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toEqual(initialState + deposit);
  });

  it("withdraws from the balance", () => {
    const withdrawal = 5;
    const initialState = 100;
    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdrawal })
    ).toEqual(initialState - withdrawal);
  });
});
