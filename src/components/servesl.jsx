import { Stack } from "@mui/material";
import React from "react";

export default function Service ({name}) {
    return(
        <Stack>
        <Stack 
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				marginTop: "100px",
				marginBottom: "100px",
			}}
		>
			
			<svg
				viewBox="0 0 10 1.5"
				sx={{
					position: "absolute",
					fontSize: "188px",
				}}
			>
				<text
					x="5"
					y="1"
					text-anchor="middle"
					font-size="1"
					fill="none"
					stroke-width=".015"
					stroke="#FFFFFF1A"
					font-family={"Sk-Modernist"}
				>
					{name}
				</text>
			</svg>

			<h3
				
				style={{ fontSize: "68px", position: "absolute", color:'white', }}
			>
				{name}
			</h3>
		</Stack> 
		
	




        </Stack>
    );
}
