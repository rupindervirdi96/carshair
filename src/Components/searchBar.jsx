import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { hideMenu, onSearchFilter } from "../actions/appActions";
import { SearchBarStyles } from "./styles";
import { SEARCH_QUERY_UPDATE } from "../actions/types";
import MenuIcon from "@mui/icons-material/Menu";

export const SearchBar = (props) => {
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state?.filteredData);

  const onChangeHandler = (e) => {
    dispatch({
      type: SEARCH_QUERY_UPDATE,
      data: e.target.value,
    });

    dispatch(onSearchFilter(filteredData, e.target.value));
  };

  return (
    <SearchBarStyles hidden={hidden}>
      <button
        onClick={() => {
          dispatch(hideMenu());
        }}
      >
        <MenuIcon />
      </button>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e)}
        placeholder="Search by keyword"
      />
    </SearchBarStyles>
  );
};
