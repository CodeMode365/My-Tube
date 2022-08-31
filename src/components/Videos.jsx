import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  // console.log(videos)
  return (
    <div>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((video, ind) => {
          return(
          <Box key={ind} >
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video.channelDetail} />}
          </Box>
        )})}
      </Stack>
    </div>
  );
};

export default Videos;
