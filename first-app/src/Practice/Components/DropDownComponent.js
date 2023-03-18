import React from "react";

const DropDownComponent = ({ genderList, handleChange }) => {
 

  return (
    <select style={{ width: "200px" }} onChange={handleChange}>
      {genderList.map((gender) => {
        return (
          <option key={gender} value={gender}>
            {gender}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownComponent;
