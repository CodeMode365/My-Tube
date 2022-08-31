import React from "react";
import { Stack } from "@mui/system";
import { logo } from "../assets/constants";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          style={{ height: "15%", width: "15%" }}
          title={"Youtube Logo"}
          alt="logo"
        />
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
