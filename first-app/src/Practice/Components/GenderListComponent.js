import React from "react";

const GenderListComponent = ({ genderType }) => {
    console.log('genderType', genderType);
  return (
    <>
        {genderType && genderType.map((item) =>{
            return(
                <ul key={item} style={{marginBottom:'20px'}}>
                    <li>{item.name}</li>
                    <li>{item.gender}</li>
                </ul>
            )
        })}

    </>
  );
};

export default GenderListComponent;
