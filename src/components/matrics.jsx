import { Stack, Typography } from "@mui/material";
import React from "react";


export default function Matrics () {
    return(
<Stack>
    <Stack sx={{height:"342px",
     width:"auto",
      backgroundColor:" ",
      marginLeft:"30px",
      alignItems:"center",
        justifyContent:"center",
        }} >

        <Typography gap={"20px"} sx={{
          color:"white",
          textAlign: "center",
         fontFamily: "Sk-Modernist",
         fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          }}>Why choose us ?</Typography>
          <Typography  sx={{height:"2px", width:"auto", color:'#fff',lineHeight: "44px"}}>We deliver high-quality bot, app, and API development and
             integration services, on time and on budget.</Typography>

             <Typography sx={{height:"92px", width:"auto",}}>
                <Typography></Typography>
             </Typography>
    </Stack>
</Stack>
    );
}