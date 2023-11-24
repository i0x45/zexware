import { Stack, Typography } from "@mui/material";
import React from "react";




export default function Team({icon1,icon2,icon3, profile,heading,user,text1,text2}) {
	return (
	<Stack>
	<Stack spacing={"16px"} sx={{
		width:"336px",
	height:"354px",
	backgroundColor:"#1F2937",
	borderRadius: "32px",
	margin:"0px 50px ",
	padding:"  30px",
	alignItems:"center",
	color:"#EDEDED",
	fontFamily: "Plus Jakarta Sans",
	fontStyle: "normal",
	fontWeight: "400",	
	lineHeight: "24px",
	border: "1px solid rgba(255, 255, 255, 0.22)",
	}}>
		
		{/* {img} */}
			 <img src= {profile} alt="" width={"96px"}height={"96px"}></img> 
		
		<Typography sx={{color: "#FFF",
        fontFamily: "Sk-Modernist",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "700",}}>{heading}</Typography>
		<Stack spacing={"10px"} sx={{
 color: "#FFF",
fontFamily: "Sora",
fontSize:   "16px",
fontStyle:  "normal",alignItems:"center",
fontWeight: "400",}}>
	<Typography sx={{color:"#6D9AFF"}} >{user}</Typography>
	<Typography>{text1}<p> {text2}</p></Typography>
	<Stack direction={"row"} spacing={"16px"} sx={{paddingTop:"25px"
		// width:"240px",height:"20px"
		}}  > 
	<img src={icon1} alt="" />
	<img src={icon2} alt="" />
	<img src={icon3} alt="" />
	 </Stack>

	</Stack>
		</Stack>
		</Stack>
	);
}
