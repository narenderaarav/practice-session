import * as React from "react";
import DropDownComponent from "./Components/DropDownComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CityDropDownComponent from "./Components/CityDropDownComponent";

const countriesList = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

const CountriesMainPage = () => {
  const [countries, setCountries] = React.useState();
  const [city, setCity] = React.useState();

  const handleChangeCountry = (event) => {
    setCountries(event.target.value);
    const listData = countriesList.filter(
      (item) => item.value === event.target.value
    );
    listData.map((item) => {
      return setCity(item.cities);
    });
  };

  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <DropDownComponent
            title="Select Country"
            countries={countries}
            handleChangeCountry={handleChangeCountry}
            list={countriesList}
          />
        </Grid>
        <Grid item xs>
          <CityDropDownComponent title="Select City" cities={city} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountriesMainPage;
