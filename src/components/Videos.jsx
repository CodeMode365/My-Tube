import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  // console.log(videos)
  if(!videos?.length) "Loading";
  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos.map((video, ind) => {
          return (
            <Box key={ind}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default Videos;
