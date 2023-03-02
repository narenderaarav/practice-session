import React from "react";

const DropDown = ({data, handleChange}) => {
  return (
    <select onChange={handleChange}>
      {data &&
        data.map(({ title, category }, i) => {
          return (
            <option key={i} value={category}>
              {title}
            </option>
          );
        })}
    </select>
  );
};

export default DropDown;
