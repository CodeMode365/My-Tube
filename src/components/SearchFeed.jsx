import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import  FetchFromApi from "../assets/FetchFromApi";
import {useParams} from 'react-router-dom'

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} =useParams();

  useEffect(() => {
    FetchFromApi(`search?q=${searchTerm}`).then(((data)=>{
      setVideos(data.items)
    }));
 
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}} >
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {"Videos for" + " "}
          <span style={{ color: "#f31503" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} display={{display:"flex", justifyContent:"center"}} />
      </Box>
    </Stack>
  );
};

export default Feed;
