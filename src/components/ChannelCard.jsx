import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../assets/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:"50%",height:"180px", width:"180px"}}
          />
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
