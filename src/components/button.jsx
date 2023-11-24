import { Button, Stack } from "@mui/material";
import React from "react";

export default function Mainbutton ( 
	
	
){
   return(
    <Stack>
        <Button sx={{
                     borderRadius: "12px",
                     
                 padding: "8px 16px",
                 border: '1px solid #9DBEF4',
                 background: 'rgba(255, 255, 255, 0.04)',
                 }}>Get a quote</Button>
    </Stack>

   ); 
}