import React, { useEffect, useState } from "react";
import DropDown from "../Components/DropDown";
import ButtonArea from "../Components/ButtonArea";
import axios from "axios";

const ComponentsContainer = () => {
  const [dropDownList, setDropDownList] = useState();
  const [dropDownData, setDropDownData] = useState();
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://dev-api-pluang.pluang.org/api/v4/mobile-app/home/tiles-config"
      );
      const apiResult = data.data;
      setDropDownList(apiResult);
    };
    getData();
  }, []);

  useEffect(() => {
    const getDropDownResult = async () => {
      const data = await axios.get(
        "https://dev-api-pluang.pluang.org/api/v4/mobile-app/home/asset-tiles"
      );
      const getApiResult = data.data.data;
      console.log('getApiResult', getApiResult)
      
      getApiResult.assetCategories.forEach(({assetCategoryData, assetCategory, title}) =>{
        assetCategoryData.map((item) =>{
          let data = item.tileInfo
          console.log('data', data)
        })
        setDropDownData(assetCategoryData)
      })
      
    };
    getDropDownResult();
  }, []);

  console.log('dropDownData',dropDownData)

  let handleChange = (e) => {
    
  };


  
  // if (apiResult) {
  //   const { filters, assetStats } = apiResult;
  //   const filterData: { [key: string]: TopMoversTileInfo[] } = {};
  //   const dropDownData: { id: string; text: string }[] = [];
  //   filters.forEach(({ id, text }: { id: string; text: string }) => {
  //     filterData[id] = assetStats[id];
  //     dropDownData.push({ id, text });
  //   });
  //   if (filters.length > 0) {
  //     setSelectedOption(filters[0]);
  //   }
  //   setDropDownList(dropDownData);
  //   setProductList(filterData);
  //   setLoaders(false);
  // }


  return (
    <div style={{ display: "flex", width: "800px", margin: "auto" }}>
      <div>
        <DropDown {...dropDownList} handleChange={handleChange} />
        <ButtonArea />
      </div>
    </div>
  );
};

export default ComponentsContainer;
