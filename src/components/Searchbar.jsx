import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Sidebar from './Sidebar'

const Searchbar = () => {
  return(
  <>
    <Paper
      component="form"
      onSubmit={() => {
        alert("hello");
      }}
      sx={{
        borderRadius: 20,
        // border: "1px solid #e3e3e3",
        boxShadow: "none",
        pl: 2,
        color: "white",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value=""
        onChange={() => {
          console.log("Typings");
        }}
        style={{border:'none', outline:'none'}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red", border:"none" }}>
        <Search />
      </IconButton>
    </Paper>
  </>
  );
};

export default Searchbar;
