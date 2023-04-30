import { fbFeed } from "./Constents/facebook";
import TextFeedComponent from "./Components/TextFeedComponent";
import ImageFeedComponent from "./Components/ImageFeedComponent";
import AudioFeedComponent from "./Components/AudioFeedComponent";
import VideoFeedComponent from "./Components/VideoFeedComponent";

const ListingMultipleTypesPage = () => {
  const renderFeed = (feed) => {
    // eslint-disable-next-line default-case
    switch (feed.type) {
      case "text":
        return <TextFeedComponent key={feed.id} {...feed} />
      case "image":
        return <ImageFeedComponent key={feed.id} {...feed} />;
      case "video":
        return <VideoFeedComponent key={feed.id} {...feed} />;
    }
  };

  return (
    <>
      {/* <AudioFeedComponent />
      <VideoFeedComponent /> */}
      <ul>{fbFeed.data.map(renderFeed)}</ul>
    </>
  );
};

export default ListingMultipleTypesPage;
