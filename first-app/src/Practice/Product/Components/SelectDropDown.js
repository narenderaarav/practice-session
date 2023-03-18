import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDropDown({
  selectProduct,
  productDropDownList,
  handleChange,
}) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Product List
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectProduct}
          onChange={handleChange}
          autoWidth
          label="Product List"
        >
          {productDropDownList.map((item) => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
