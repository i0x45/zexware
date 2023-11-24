import { Stack } from "@mui/material";
import LOGO_NAVBAR from "..//assets/brand/logo-navbar.png";
import React from "react";
import Simplebutton from "./samplebutton";
import Mainbutton from "./button";


export default function Header() {
  return (
    <Stack direction={"column"}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "auto",
          height: "80px",
          justifyContent: "space-around",
          alignItems: "center",
          
        }}
      >
        <img src={LOGO_NAVBAR} style={{ height: "64px" }}alt="navbar" />
       <Simplebutton/>
       <Mainbutton/>
      </Stack>
    </Stack>
  );
}
