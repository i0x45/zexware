import { Stack, Typography } from "@mui/material";
import AVATAR from "../assets/avatar.png"
import React from "react";




export default function Team() {
	return (<Stack spacing={"16px"} sx={{width:"211px",height:"284px",backgroundColor:"#1F2937",
	borderRadius: "32px",margin:"0px 50px ",padding:" 40px 24px",alignItems:"center",
	
	
	
	border: "1px solid rgba(255, 255, 255, 0.22)",
	}}>
		
		{/* {img} */}
			 <img src= { AVATAR} alt="" width={"96px"}height={"96px"}></img> 
		
		<Typography sx={{color: "#FFF",
        fontFamily: "Sk-Modernist",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "700",}}>Amélie Laurent</Typography>
		<Typography sx={{
color: "#FFF",
fontFamily: "Sora",
fontSize:   "16px",
fontStyle:  "normal",

fontWeight: "400",}}><p>Founder & CEO</p><p>Founder & CEO</p><p>Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
	{/* <p >NodeJS REST API </p><p>GraphQL API</p><p>Poti API</p> */}
	</Typography>
		</Stack>
	);
}
