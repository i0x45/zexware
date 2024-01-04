import { Stack, Typography } from "@mui/material";
import React from "react";
import INTEGRATIONS from "../assets/ic_integrations.png"
export default function Integration ({name}) {
    return(
        <Stack>
        <Stack 
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "100px",
				
			}}
		><Stack>
			<img src={INTEGRATIONS}alt="Integrations"></img>
			</Stack>
            <Typography>
            <h3
				style={{ fontSize: "48px",  color:'white', fontFamily:' Sk-Modernist',fontWeight:"700" }}
			>
		      Integrations
			</h3>
            </Typography>
</Stack>
</Stack>
);
}
