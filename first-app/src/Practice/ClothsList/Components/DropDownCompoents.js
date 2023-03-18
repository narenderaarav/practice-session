
const DropDown = ({productTypeList, handleSelect}) =>{
    return(
        <select onChange={handleSelect}>
            {productTypeList.map((item) =>{
                return(
                    <option key={item.value} value={item.value}>{item.label}</option>
                )
            })}
        </select>
    )
};

export default DropDown;