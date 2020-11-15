import axios from "axios";

const getStarWarsActionsRequest = () => {
  return {
    type: "GET_STAR_REQUEST",
  };
};

const getStarWarsActionsSuccess = (data) => {
  return {
    type: "GET_STAR_WAR_SUCCESS",
    payload: data,
  };
};

const getStarWarsActionsFailure = (data) => {
  return {
    type: "GET_STAR_FAILURE",
    payload: data,
  };
};

export const getStarWarsData = () => {
  return (dispatch) => {
    dispatch(getStarWarsActionsRequest());
    axios
      .get("https://swapi.dev/api/planets/")
      .then((data) => {
        dispatch(getStarWarsActionsSuccess(data));
      })
      .catch((error) => {
        dispatch(getStarWarsActionsFailure(error.message));
      });
  };
};
