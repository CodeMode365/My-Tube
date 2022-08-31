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
      {/* <h2>
        ⭐RapidAPI Extension - https://marketplace.visualstudio.com/...
        ⭐RapidAPI YouTube v3 - https://rapidapi.com/ytdlfree/api/you...
        ⭐RapidAPI - https://rapidapi.com/?utm_source=yout... 📚
        Materials/References: GitHub Code (give it a star ⭐):
        https://github.com/adrianhajdin/proje... GitHub Gist Code Snippets:
        https://gist.github.com/adrianhajdin/... Hosting -
        http://hostinger.com/javascriptmastery
      </h2> */}

      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video:id" element={<VideoDetail />} />
            <Route path="/video:id" element={<ChannelDetail />} />
            <Route path="/video:id" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <h2>Hello</h2>
    </>
  );
};

export default App;
