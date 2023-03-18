import { useState, useEffect } from "react";
import { clothsListing } from "../constents";

const ShoesListComponets = ({ selectProductName }) => {
  const [list, updateList] = useState([]);
console.log('selectProductName', selectProductName);
  useEffect(() => {
    if (selectProductName.toLowerCase() === "all") {
      updateList(clothsListing);
    } else {
      const listData = clothsListing.filter(
        (item) => item.brandName.toUpperCase() === selectProductName
      );
      updateList(listData);
    }
  }, [selectProductName]);

  return (
    <>
      <div>product name : {selectProductName}</div>
      {list.map(({ brandName, catogory, price, size, type, id }) => {
        return (
          <ul style={{ marginBottom: "20px" }} key={id}>
            <li>{brandName}</li>
            <li>{catogory}</li>
            <li>{price}</li>
            <li>{type}</li>
            <li>
              <ul>
                {size.map((item, i) => {
                  return <li key={item+i+id}>{item}</li>;
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ShoesListComponets;
