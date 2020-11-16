export const getStarWarsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STAR_REQUEST":
      return {
        loading: true,
        data: [],
        error: "",
      };
    case "GET_STAR_WAR_SUCCESS":
      return {
        loading: false,
        data: [...action.payload.data.results],
        error: "",
      };
    case "GET_STAR_FAILURE":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
