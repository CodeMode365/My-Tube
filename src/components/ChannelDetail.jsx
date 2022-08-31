import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import FetchFromApi from "../assets/FetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FetchFromApi(`channels?snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: "95vh",
        // background: " rgb(235,29,54)",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(63deg, rgba(127,188,210,1) 8%, rgba(22,193,233,1) 47%, rgba(43,72,101,1) 93%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
