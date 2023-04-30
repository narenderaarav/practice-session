const ImageFeedComponent = ({ heading, images }) => {
  return (
    <div style={{ background: "#CDD5D1", padding: "20px" }}>
      <li>{heading}</li>
      <li>
        {images.map((img) => {
          return <img src={img} alt="img" />;
        })}
      </li>
    </div>
  );
};

export default ImageFeedComponent;
