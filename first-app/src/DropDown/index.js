import React, {useState } from "react";

const dropDownData = [
  {
    name: "narender",
    add: "tigri",
    phone: "979798798",
  },
  {
    name: "ravi",
    add: "rohini",
    phone: "979798798",
  },
  {
    name: "abijot",
    add: "gurugram",
    phone: "979798798",
  },
];

const DropDown = () => {
  const [listData, setListData] = useState([{
    name: "narender",
    add: "tigri",
    phone: "979798798",
  }]);
  
  let handleChange = (e) => {
    const listData = dropDownData.filter(
      (item) => item.name === e.target.value
    );
    
    setListData(listData);
  };

  return (
    <>
      <select onChange={handleChange}>
        {dropDownData.map((item, i) => {
          return (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <div>
      {
          listData && listData.map((item, i) =>{
             return(
                 <div key={i}>
                     <ul>
                         <li>Name: {item.name}</li>
                         <li>Address: {item.add}</li>
                         <li>Phone: {item.phone}</li>
                     </ul>
                 </div>
             )
          })
      }
      </div>
      
    </>
  );
};

export default DropDown;
