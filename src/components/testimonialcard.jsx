import { Stack, Typography } from "@mui/material";
import React from "react";
import STAR from "../assets/star.png"
import AVATAR from "../assets/avatar.png"

export default function Testimonialcard({Author}) {
	return (
	<Stack spacing={"16px"}
	 sx={{width:"336px",
	 height:"354px",
	 backgroundColor:"rgba(255, 255, 255, 0.05)",
	borderRadius: "32px",
	margin:"0px 50px ",
	padding:" 40px 24px",
	border: "1px solid rgba(255, 255, 255, 0.22)",
	}}><Stack sx={{ alignItems:"center",gap:"px"}}>
				<Typography ><img src={STAR} alt="star" />
					<img src={STAR} alt="star" />
					<img src={STAR} alt="star" />
					<img src={STAR} alt="star" />
					<img src={STAR} alt="star" /></Typography>
					</Stack><Stack spacing={"36ps"}>
				<Typography sx={{ color:"#F3F4F6",
					fontSize: " 24px",
					fontStyle: "normal",
					textAlign: "center",
					fontFamily: "Sora",}}>

					 I have been using them for a year now. Everything is
					 detailed and well organized and, 
					of course, damn beautiful. 
				</Typography></Stack>
				<Stack spacing={"36px"} sx={{alignItems:"center"}}>
				<img src={ AVATAR} alt="logo"></img></Stack>
				<Typography sx={{color:"#F3F4F6",fontSize:"16px",fontFamily:"sora",fontStyle:"normal",textAlign:"center"}}>{Author} </Typography>
				<Typography sx={{color:"#F3F4F6",fontSize:"14px",fontFamily:"sora",fontStyle:"normal",textAlign:"center"}}>UX Designer, Zexware, Inc </Typography>
	</Stack>


		
	);
}
