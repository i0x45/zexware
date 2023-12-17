import { Stack, Typography } from "@mui/material";
import React from "react";
import MESSAGE from "../assets/message.png"


export default function Input () {
    return(
        <Stack>
            <Stack sx={{width:"533px",height:"130px",border: "1px solid rgba(255, 255, 255, 0.22)",}}>
                <Stack  sx={{display:"flex" , width:"275px",height:"130px",border: "1px solid rgba(255, 255, 255, 0.22)",}}> 
            <Typography sx={{ display:"block",width:"25px",height:"130px"}}
            ><img src={MESSAGE} alt="message"></img>
            </Typography>
            <Typography sx={{fontSize:"20px",color:"#FFF"}} >Email</Typography>
            
            </Stack>


            </Stack>
        </Stack>
    )
}