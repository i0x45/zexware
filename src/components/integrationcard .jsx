import { Stack, Typography } from "@mui/material";
import React from "react";




export default function ServiceCard({username,about1,about2,about3,src,  }) {
	return (<Stack spacing={"16px"} sx={{width:"225px",height:"200px",backgroundColor:"#1F2937",
	borderRadius: "32px",margin:"0px 50px ",padding:" 40px 24px",
	
	
	
	border: "1px solid rgba(255, 255, 255, 0.22)",
	}}>
		<Typography sx={{width:"51px",height:"51px", }}>
		{/* {img} */}
			 <img src= {src} alt="" ></img> 
		</Typography><br/>
		<Typography sx={{color: "#FFF",
        fontFamily: "Sk-Modernist",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "700",}}>{username}</Typography>
		<Typography sx={{
color: "#FFF",
fontFamily: "Sora",
fontSize:   "16px",
fontStyle:  "normal",

fontWeight: "400",}}>{about1}<br/>{about2}<br/>{about3}<br/>
	{/* <p >NodeJS REST API </p><p>GraphQL API</p><p>Poti API</p> */}
	</Typography>
		</Stack>
	);
}
