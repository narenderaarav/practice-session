const VideoFeedComponent = ({ source, heading }) => {
  return (
    <div style={{ background: "#78D2A5", padding: "20px" }}>
      <li>{heading}</li>
      <li>
        <video
          autoPlay
          playsInline
          muted
          src={source}
          width={200}
        />
      </li>
    </div>
  );
};

export default VideoFeedComponent;
