import { Stack, Typography } from "@mui/material";
import AVATAR from "../assets/avatar.png"
import React from "react";




export default function Team() {
	return (<Stack spacing={"16px"} sx={{width:"258px",height:"332px",backgroundColor:"#1F2937",
	borderRadius: "32px",margin:"0px 50px ",padding:" 40px 24px",
	
	
	
	border: "1px solid rgba(255, 255, 255, 0.22)",
	}}>
		<Typography sx={{width:"51px",height:"51px", }}>
		{/* {img} */}
			 <img src= { AVATAR} alt="" ></img> 
		</Typography><br/>
		<Typography sx={{color: "#FFF",
        fontFamily: "Sk-Modernist",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "700",}}>Amélie Laurent</Typography>
		<Typography sx={{
color: "#FFF",
fontFamily: "Sora",
fontSize:   "16px",
fontStyle:  "normal",

fontWeight: "400",}}>Founder & CEO<br/>
	{/* <p >NodeJS REST API </p><p>GraphQL API</p><p>Poti API</p> */}
	</Typography>
		</Stack>
	);
}
