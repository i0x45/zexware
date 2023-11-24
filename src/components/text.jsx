import { Stack, Typography } from "@mui/material";
import React from "react";


export default function Text ({heading,about}) {
    return(
<Stack>
    <Stack sx={{height:"380px",
     width:"770",
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
          fontWeight: "768",
          
          }}> {heading} </Typography>
          <Typography  sx={{ width:"700px",
            height:"60px",
             color:'#fff',
             fontSize:"24px",
             textAlign: "center",
             fontFamily: "Sk-Modernist",lineHeight:"50px"
             }}>{about }</Typography>

            
    </Stack>
</Stack>
    );
}