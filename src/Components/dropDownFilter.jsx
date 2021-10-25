import * as React from "react";
import { DropDownFilterStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "./dropDown";
import {
  changeMake,
  changeType,
  changeYear,
  getFilter,
} from "../actions/appActions";

export const DropDownFilter = (props) => {
  const { makes, types, years } = props.data;

  const { make, year, type } = useSelector((state) => ({
    make: state?.currentFilters.make,
    type: state?.currentFilters.type,
    year: state?.currentFilters.year,
  }));
  console.log(make, type, year);

  const dispatch = useDispatch();

  const handleChangeMake = (e) => {
    // console.log(e);
    dispatch(changeMake(e.target.value));
  };

  const handleChangeType = (e) => {
    // console.log(e);
    dispatch(changeType(e.target.value));
  };

  const handleChangeYear = (e) => {
    // console.log(e);
    dispatch(changeYear(e.target.value));
  };

  React.useEffect(() => {
    dispatch(getFilter({ make: make, type: type, year: year }));
  }, [dispatch, make, year, type]);

  return (
    <DropDownFilterStyles>
      <DropDown
        type="Make"
        data={makes}
        value={make}
        handleChange={handleChangeMake}
      />
      <DropDown
        type="Type"
        data={types}
        value={type}
        handleChange={handleChangeType}
      />
      <DropDown
        type="Year"
        data={years}
        value={year}
        handleChange={handleChangeYear}
      />
    </DropDownFilterStyles>
  );
};
