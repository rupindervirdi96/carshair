import React from "react";
import { SideBarStyles } from "./styles";
import { DropDownFilter } from "./dropDownFilter";
import { useSelector } from "react-redux";

export const SideBar = (props) => {
  const hide = useSelector((state) => state?.hide);

  const data = useSelector((state) => ({
    makes: state?.allData,
    types: state?.vehicleTypes,
    years: state?.years,
  }));

  return (
    <SideBarStyles hide={hide}>
      <div>
        <DropDownFilter data={data} />
      </div>
    </SideBarStyles>
  );
};
