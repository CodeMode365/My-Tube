import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import  FetchFromApi from "../assets/FetchFromApi";
import {useParams} from 'react-router-dom'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const {searchTerm} =useParams();

  useEffect(() => {
    FetchFromApi(`search?q=${searchTerm}`).then(((data)=>{
      setVideos(data.items)
    }));
 
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 1 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          varient="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 CodeMode365
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {"Search Result for" + " "}
          <span style={{ color: "#f31503" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
