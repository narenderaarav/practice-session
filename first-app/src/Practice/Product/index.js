import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectDropDown from "./Components/SelectDropDown";
import Box from "@mui/material/Box";
import axios from "axios";
import ProductListingPage from './Components/ProductListing'
const ProductMainpage = () => {
  const [productDropDownList, setProductDropDownList] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://dummyjson.com/products/categories");
      const apiResult = data.data;
      setProductDropDownList(apiResult);
    };
    getData();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const data = await axios.get(
        `https://dummyjson.com/products/category/${selectProduct}?skip=0&limit=10`
      );
      const apiResult = data.data;
      setProductList(apiResult);
    };
   
    getProduct();
  }, [selectProduct]);

  const handleChange = (event) => {
    setSelectProduct(event.target.value);
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <SelectDropDown
            productDropDownList={productDropDownList}
            selectProduct={selectProduct}
            handleChange={handleChange}
          />
        </Box>
        <Grid>34234</Grid>
      </Container>
      <ProductListingPage  productList={productList} selectProduct={selectProduct}/>
    </>
  );
};

export default ProductMainpage;
