import thunk from "redux-thunk";
// Use test fetch to stub api requests
import fetchMock from "fetch-mock";
// To create a mock store
import configureMockStore from "redux-mock-store";

import { FETCH_BITCOIN } from "./constants";
import { fetchBitcoin } from "./bitcoin";

// create mock store
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

// create mock response
const mockResponse = { body: { bpi: "bitcoin price index" } };

// stub and intercept any actual API calls during testing
fetchMock.get(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  mockResponse
);

it("creates an async action to fetch the bitcoin value", () => {
  // A list of all actions to make a comparison against later
  const expectedActions = [{ type: FETCH_BITCOIN, bitcoin: mockResponse.body }];

  // If it's async, jest wants the promise to be returned
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
