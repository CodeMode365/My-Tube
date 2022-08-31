import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchFromApi } from "../assets/FetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(selectedCategory).then(((data)=>{
      setVideos(data.items)
    }));
 
  }, [selectedCategory]);

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
          Copyright 2020 CodeMode365
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
          {selectedCategory + " "}
          <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
