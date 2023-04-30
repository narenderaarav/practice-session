
const TextFeedComponent = ({heading, description}) =>{
    return(
       <div style={{background:'#eee', padding:'20px'}}>
       <li>{heading}</li>
       <li>{description}</li>
       </div>
    );
};

export default  TextFeedComponent;