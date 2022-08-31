import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Navbar,
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video:id" element={<VideoDetail />} />
            <Route path="/channel:id" element={<ChannelDetail />} />
            <Route path="/search:id" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
