import {useState } from "react";
import DropDown from "./Components/DropDownCompoents";
import ShoesListComponets from "./Components/ShoesListCompoents";
import { shoesList } from "./constents";
const MainCloths = () => {
  const [selectProductName, setSelectProductName] = useState('all');
  const handleSelect = (e) => {
    setSelectProductName(e.target.value.toUpperCase())
  };

  return (
    <>
      <DropDown productTypeList={shoesList} handleSelect={handleSelect} />
      <ShoesListComponets selectProductName={selectProductName}  />
    </>
  );
};

export default MainCloths;
