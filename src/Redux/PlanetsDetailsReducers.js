export const planetsDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLANETS_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
