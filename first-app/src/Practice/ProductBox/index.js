import React from "react";
import TabButton from "./Components/TabButton";
import { product, productList, productsTwo } from "./Constents/product";
import ProductListing from "./Components/ProductListing";
import Grid from "@mui/material/Grid";
import AllProduct from "./Components/AllProduct";

const ProductMainPage = () => {
  const [value, setValue] = React.useState(0);
  const [proList, setProList] = React.useState(product.data["menclothing"]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setProList(product.data[event.target.id]);
  };
console.log('proList', proList);
  return (
    <>
      <TabButton
        handleChange={handleChange}
        value={value}
        productList={productList}
      />
      <Grid container spacing={6} mt={4}>
        {proList &&
          proList.map((item) => {
            return (
              <ProductListing
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
      </Grid>

      {/* {Object.keys(product.data).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <Grid container spacing={6} my={4}>
            {product.data[category].map((item) => (
              <AllProduct
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </Grid>
        </div>
      ))} */}
      <hr></hr>
      <Grid sx={{mt:6}}>
        {productList.data.map((category) => (
          <div key={category.key}>
            <h2>{category.label}</h2>
            <Grid container spacing={6} my={4}>
              {product.data[category.key].map((item) => (
                <AllProduct
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </Grid>
          </div>
        ))}
      </Grid>
      <hr></hr>

      {/* <Grid sx={{mt:6}}>
        {productsTwo.data.map((item) =>{
          return(
          <div>
            <h2>{item.cetorgry}</h2>
            <AllProduct
                  key={item.id}
                  description={item.description}
                  image={item.image}
                />
          </div>
          )
        })}
      </Grid> */}
    </>
  );
};

export default ProductMainPage;
