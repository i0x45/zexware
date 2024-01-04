import HERO from "../assets/hero.png"
// import HERO_GLOW from "../assets/hero_glow.png"
import { Avatar, AvatarGroup, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

 
export default function Home (){
   const desktop = useMediaQuery("screen and (min-width: 710px)");

 return(
   <Stack
   direction={"row"}
   justifyContent={desktop ? "space-between" : "center"}
   alignItems={"center"}
   flexWrap={desktop ? "nowrap" : "wrap"}
   sx={{
     width: "100%",
     minHeight: "100vh",
     px: desktop ? 0 : "24px",
   }}
 >
   {/* The side text  */}
   <Stack flex={1} sx={{ pl: desktop ? "120px" : "32px" }}>
     <Stack
       style={{
         position: "absolute",
         marginLeft: desktop ? "-80px" : "-90px",
         marginTop: desktop ? "-75px" : "-50px",
         width: desktop ? "177px" : "100px",
         height: desktop ? "177px" : "100px",
       }}
     >
      
     </Stack>
     <Stack spacing={"36px"} 
     sx={{
       //  height: desktop?"300px":"102px",
       //      width: desktop?"588px":"250px",
            }}>
     <Typography
       sx={{
         fontSize: desktop ? "52px" : "24px",
         fontFamily: "#Sk-Modernist",
         fontWeight: "700px",
         letterSpacing: "-2.34px",
       }}
     >
       <span
         style={{
           // height:"204px",
           // width:"588px",
           height: desktop?"204px":"102px",
           width: desktop?"588px":"250px",
           background:
             "linear-gradient(272deg, #2563EB 10.3%, #F2F2F2 67%)",
           backgroundClip: "text",
           WebkitBackgroundClip: "text",
           WebkitTextFillColor: "transparent",
           // webkit-background-clip: text;
           // -webkit-text-fill-color: transparent;
         }}
       >
                {/* <SPARKLE /> */}
                  Digital Solutions Tailored to You: App and Web Development Experts
       </span>{" "}
     
     </Typography>
     <Stack 
       style={{
         position: "absolute",
         left: 0,
         marginTop: "-200px",
         overflow: "hidden",
         width: "100%",
       }}
     >
    {/* <img src={HERO_GLOW} alt="" />  */}
     </Stack>
   
     <Typography
       sx={{
         fontSize: desktop ? "16px" : "14px",
         color: "#D1D5DB",
         maxWidth: "500px",
       }}
     >
       We offer a comprehensive suite of services designed to meet your
       unique needs. From Desktop, Android, and iOS App development to
       Website Design & Development, we've got you covered.{" "}
     </Typography></Stack>
     <Button 
       onClick={() =>
         window.scrollTo({
           behavior: "smooth",
           top: window.document.getElementById("why-us")?.offsetTop,
         })
       }
       variant="contained"
       sx={{
         alignSelf: "start",
         mt: "40px",
         border: "5px solid #1E3A8A",
         borderRadius: "12px",
       }}
     >
       Learn more -&gt;
     </Button>
     <Typography
       sx={{
         mt: "30px",
         fontSize: desktop ? "32px" : "24px",
         fontWeight: 700,
         color: "var(--Gray-200, #EAECF0)",
       }}
     >
       Over <span style={{ color: "#60A5FA" }}>30+</span>
     </Typography>
     <Typography
       sx={{
         mt: "10px",
         fontSize: desktop ? "16px" : "14px",
         fontWeight: 400,
         color: "var(--Gray-200, #EAECF0)",
       }}
     >
       Happy Customers
     </Typography>
     <Stack direction={"row"} sx={{ pt: "6px" }}>
       <AvatarGroup variant="circular">
         <Avatar sx={{ width: "28px", height: "28px" }} />
         <Avatar sx={{ width: "28px", height: "28px" }} />
         <Avatar sx={{ width: "28px", height: "28px" }} />
         <Avatar sx={{ width: "28px", height: "28px" }} />
       </AvatarGroup>
     </Stack>
   </Stack>

   {desktop && (
     <Stack flex={1} sx={{ px: "120px" }}>
     <img src={HERO} alt="" />  
     </Stack>
   )}
 </Stack>
 );
}