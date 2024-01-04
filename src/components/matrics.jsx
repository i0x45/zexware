import { Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";


export default function Matrics () {
    const desktop = useMediaQuery("screen and (min-width: 710px)");
    return(
<>  {/* Why Choose Us  */}
     
      <Stack sx={{ mt: "0px" }} justifyContent={"center"} alignItems={"center"}>
        <Typography
          sx={{ fontSize: desktop ? "48px" : "28px", fontWeight: 700, color: "var(--Gray-200, #EAECF0)",}}
        >
          Why Choose <span style={{ color: "#2563EB" }}>Us?</span>
        </Typography>
        <Typography
          sx={{
            fontSize: desktop ? "20px" : "14px",
            fontWeight: 400,
            maxWidth: desktop ? "700px" : "100%",
            px: "24px",
            textAlign: "center",
            color: "var(--Gray-200, #EAECF0)"
          }}
        >
          We deliver high-quality bot, app, and API development and integration
          services, on time and on budget.
        </Typography>

        {/* The why choose us cards  */}
        <Stack
          direction={"row"}
          sx={{ mt: desktop ? "64px" : "32px" }}
          spacing={desktop ? "0px" : 0}
          rowGap={desktop ? 0 : "14px"}
          columnGap={desktop ? 0 : "14px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            sx={{
              px: "24px",
              borderLeft: "2px solid #497CEE",
              minWidth: desktop ? "200px" : "170px",
              color: "var(--Gray-200, #EAECF0)",
            }}
          >
            <Typography
              sx={{ fontSize: desktop ? "48px" : "32px", fontWeight: 700 }}
            >
              90<span style={{ color: "#2563EB" }}>+</span>
            </Typography>
            <Typography
              sx={{ fontSize: desktop ? "14px" : "12px", fontWeight: 600 }}
            >
              Projects completed
            </Typography>
          </Stack>

          <Stack
            sx={{
              px: "24px",
              borderLeft: "2px solid #497CEE",
              minWidth: desktop ? "200px" : "170px",
              color: "var(--Gray-200, #EAECF0)",
            }}
          >
            <Typography
              sx={{ fontSize: desktop ? "48px" : "32px", fontWeight: 700 }}
            >
              95<span style={{ color: "#2563EB" }}>%</span>
            </Typography>
            <Typography
              sx={{ fontSize: desktop ? "14px" : "12px", fontWeight: 600 }}
            >
              Client Satisfaction
            </Typography>
          </Stack>

          <Stack
            sx={{
              px: "24px",
              borderLeft: "2px solid #497CEE",
              minWidth: desktop ? "200px" : "170px",
              color: "var(--Gray-200, #EAECF0)",
            }}
          >
            <Typography
              sx={{ fontSize: desktop ? "48px" : "32px", fontWeight: 700 }}
            >
              20<span style={{ color: "#2563EB" }}>+</span>
            </Typography>
            <Typography
              sx={{ fontSize: desktop ? "14px" : "12px", fontWeight: 600 }}
            >
              Diverse Integrations
            </Typography>
          </Stack>

          <Stack
            sx={{
              px: "24px",
              borderLeft: "2px solid #497CEE",
              minWidth: desktop ? "200px" : "170px",
              color: "var(--Gray-200, #EAECF0)",
            }}
          >
            <Typography 
              sx={{ fontSize: desktop ? "48px" : "32px", fontWeight: 700 }}
            >
              99<span style={{ color: "#2563EB" }}>%</span>
            </Typography>
            <Typography
              sx={{ fontSize: desktop ? "14px" : "12px", fontWeight: 600 }}
            >
              On-time delivery
            </Typography>
          </Stack>
        </Stack>
      </Stack></>
    );
}