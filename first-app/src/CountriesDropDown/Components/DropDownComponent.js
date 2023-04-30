import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CountriesDropDown = ({ title, countries, handleChangeCountry, list }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countries}
          label={title}
          onChange={handleChangeCountry}
        >
          {list?.map((item) => {
            return <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountriesDropDown;
