import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../assets/constants";
const VideoCard = ({
  video: {
    snippet,
    id: { videoId },
  },
}) => {
  return (
    <Card sx={{ width:{md:"320px", xs:"100%"}, boxShadow:'none', borderRadius:"none" }}>
      <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ minWidth: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
          <Typography variant={"subtitle"} fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channenId}`
              : `${demoChannelUrl}`
          }
        >
          <Typography color="gray" fontWeight={"bold"} variant="subtitle2">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
