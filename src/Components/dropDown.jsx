import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { DropDownStyles } from "./styles";

const dropdownMenuProps = {
  menuStyle: {
    border: "1px solid black",
    borderRadius: "5%",
    backgroundColor: "lightgrey",
  },
};

function DropDown(props) {
  const { type, data, value, handleChange } = props;

  return (
    <DropDownStyles>
      <FormControl style={{ color: "white" }} className="form" fullWidth>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          value={value ? value : ""}
          label={type}
          onChange={handleChange}
        >
          {type !== "Make" ? <MenuItem value="">None</MenuItem> : ""}
          {data?.map((data, key) => {
            while (key < 25) {
              return (
                <MenuItem
                  key={key}
                  value={type === "Make" ? data.Make_Name : data}
                >
                  {type === "Make" ? data.Make_Name : data}
                </MenuItem>
              );
            }
            return "";
          })}
        </Select>
      </FormControl>
    </DropDownStyles>
  );
}

export default DropDown;
