import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";

const ProductListingPage = ({ productList, selectProduct }) => {
    console.log('selectProduct', selectProduct);
    const [productListing, setProductListing] = useState([]);

    useEffect(() =>{
        const list = productList?.products?.filter((item) =>{
            return item.category === selectProduct
        })
        setProductListing(list)
    },[productList?.products, selectProduct])


  return (
    <Container sx={{ width: "100%", display: "flex", gap: 2 }}>
      {productListing?.map((item) => {
        const { title, description, price, rating, thumbnail, brand } = item;
        return (
          <>
          <Box sx={{ width: "400px", border: "1px #eee solid", p: 2 }} key={title}>
            <img src={thumbnail} width={300} height={200} alt={title} />
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>{description}</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              price: Rs- {price}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Rating: {rating}</Typography>
            <Typography sx={{ fontSize: "14px" }}>Brand: {brand}</Typography>
          </Box>
          </>
        );
      })}
    </Container>
  );
};

export default ProductListingPage;
