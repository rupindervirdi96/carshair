import {
  GET_ALL_DATA,
  GET_FILTERED_DATA,
  CHANGE_MAKE,
  CHANGE_TYPE,
  CHANGE_YEAR,
  SEARCH_FILTERED_DATA,
  HIDE_MENU,
} from "./types";
import axios from "axios";

export const getAllMakes = () => async (dispatch) => {
  let response = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json`
  );
  dispatch({
    type: GET_ALL_DATA,
    data: response.data.Results,
  });
};

const buildURL = ({ make, year, type }) => {
  const BASEURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake";

  const COMMON_URL = `${BASEURL}Year/make/${make}`;

  if (year && type) {
    return `${COMMON_URL}/modelYear/${year}/vehicletype/${type}`;
  }

  if (year) {
    return `${COMMON_URL}/modelYear/${year}`;
  }

  if (type) {
    return `${COMMON_URL}/vehicletype/${type}`;
  }
};

export const getFilter = (filters) => async (dispatch) => {
  let url = buildURL(filters) + "?format=json";

  let response = await axios.get(url);
  dispatch({
    type: GET_FILTERED_DATA,
    data: response.data.Results,
  });
};

export const changeMake = (make) => async (dispatch) => {
  dispatch({
    type: CHANGE_MAKE,
    data: make,
  });
};

export const changeType = (type) => async (dispatch) => {
  dispatch({
    type: CHANGE_TYPE,
    data: type,
  });
};

export const changeYear = (year) => async (dispatch) => {
  dispatch({
    type: CHANGE_YEAR,
    data: year,
  });
};

export const onSearchFilter = (data, value) => (dispatch) => {
  const searchFiltered = data.filter((data) =>
    data.Model_Name?.toLowerCase().includes(value.toLowerCase())
  );
  dispatch({
    type: SEARCH_FILTERED_DATA,
    data: searchFiltered,
  });
};

export const hideMenu = () => (dispatch) => {
  dispatch({
    type: HIDE_MENU,
    data: "",
  });
};
