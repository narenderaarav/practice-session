import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CityDropDownComponent = ({ title, cities }) => {
    console.log('cities', cities)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={title}
        >
          {cities && cities.length && cities.map((item) => {
            return (
                <MenuItem key={item} value={item}>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CityDropDownComponent;
