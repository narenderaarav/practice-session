import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";

const ProductListing = ({ title, description, image }) => {
  return (
    <Grid item xs={6}>
      <Box sx={{ border: "1px #eee solid", p: 4 }}>
        <Box sx={{width:'100%', mb:2}}>
            <img src={image} alt="" width="100%" height="300px" />
        </Box>
        <Typography sx={{mb:2}}><h3>{title}</h3></Typography>
        <Typography>{description}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductListing;
