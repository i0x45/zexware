import HERO from "../assets/hero.png"

import { Button, Stack, Typography } from "@mui/material";
import React from "react";

 
export default function Home (){
 return(
<Stack direction={"row"} sx={{ justifyContent:'space-around'}}  >
      <Stack spacing={"60px"}  sx={{  width:"588px",height:"532px",backgroundColor:'', }}>

         <Typography  sx={{width:'auto',
        
         height:'144px',
         color:'white',
         fontSize:'68px',
         fontFamily:"Sk-Modernist",
          paddingTop:'150px', 
         }} >
  
            Coding the future,<br/> today
           
          </Typography>
          <Typography sx={{width:'auto',
         height:'60px',color:'white'
          }} ><p>We offer a comprehensive suite of services designed to meet your unique needs. From Desktop,
             Android, and iOS App development to Website Design & Development, we've got you covered.</p>
      
        </Typography>
        <Button sx={{
							padding: "12px 16px",
							width: "154px",
							borderRadius: "12px",
							fontSize: "16px",
							marginTop: "80px",}}>learn more  </Button>
                     <Stack>
                        <Typography sx={{color :'white',fontSize:'32px'}}>
                           <p>Over 1K+</p>
                        </Typography>
                        <Typography sx={{color :'white',}}>Happy user</Typography>
                     </Stack>
      </Stack>
       <img src={HERO} style={{width: '800px',
      height: '603px'}}alt="navbar" /> 
{/* 
       */}
</Stack>
 );
}