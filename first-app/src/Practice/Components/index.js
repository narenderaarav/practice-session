import React,{useState} from 'react';
import GenderListComponent from './GenderListComponent';
import DropDownComponent from './DropDownComponent';
import {genderList} from './../constents'

const MainPage = () =>{
    const [genderType, changeGenderType ] = useState()
    const uniqueList = [
        ...new Set(
          genderList.map((item) => {
            return item.gender;
          })
        ),
      ];
    const handleChange = (e) =>{
        const listData = genderList.filter(
            (item) => item.gender === e.target.value
          );
          changeGenderType(listData) 
    }
    console.log('genderType', genderType);
    return(
        <>
        <DropDownComponent genderList={uniqueList} handleChange={handleChange}/>
        <GenderListComponent genderType={genderType} />
        </>
    )
};

export default MainPage;