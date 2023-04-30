const ListItemComponent = ({ PRODUCT_LIST }) => {
  return (
    <table style={{border:'1px #000 solid', width:'100%'}}>
      {PRODUCT_LIST.map((item) => {
        return (
          <tr key={item.id} >
            <td style={{border:'1px #000 solid'}}>{item.brandName}</td>
            <td style={{border:'1px #000 solid'}}>{item.type}</td>
            <td style={{border:'1px #000 solid'}}>{item.catogory}</td>
            <td style={{border:'1px #000 solid'}}>{item.price}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default ListItemComponent;
