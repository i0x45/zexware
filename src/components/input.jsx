import { Button,   Checkbox,   Stack,  TextField,  Typography } from "@mui/material";
import React from "react";
import MESSAGE from "../assets/message.png"


export default function Input () {

    

    return(
        <Stack  spacing={"70px "} direction={"row"} >
            <Stack  spacing={"40px "}sx={{width:"533px",height:"332px", border: "1px solid rgba(255, 255, 255, 0.22)", }} >
            <Stack spacing={"29px "} direction={"row"} sx={{width:"533px",height:"130px", }}>
                <Stack  direction={"row"} sx={{width:"250px",
                height:"130px",
                // border: "1px solid rgba(255, 255, 255, 0.22)",
                 display:"flex",
                 gap:"20px"
                 }}> 


            <Typography 
            sx={{width:"25px",
            height:"25px",
                          }}>
            <img src={MESSAGE} alt="message"></img>
            </Typography>
            <Typography  
              sx={{fontSize:"16px",
              color:"#FFF",
             
       }} >
        <Typography  sx={{}} >Email</Typography><br/> 
        <Typography sx={{gap:"20px",color:"#77ABFF"}}> Our friendly team is here to help.</Typography>

        <Typography    sx={{fontSize:"16px",color:"#FFF",
    }} > <p>zexware.gmai.com</p>
    
    </Typography>
       
       </Typography>
        </Stack> 
        <Stack  direction={"row"} sx={{width:"250px",
                height:"130px",
                // border: "1px solid rgba(255, 255, 255, 0.22)",
                 display:"flex",
                 gap:"20px"
                 }}> 


            <Typography 
            sx={{width:"25px",
            height:"25px",
                          }}>
            <img src={MESSAGE} alt="message"></img>
            </Typography>
            <Typography  
              sx={{fontSize:"16px",
              color:"#FFF",
             
       }} >
        <Typography  sx={{}} >Email</Typography><br/> 
        <Typography sx={{gap:"20px" ,color:"#77ABFF"}}> Our friendly team is here to help.</Typography>

        <Typography    sx={{fontSize:"16px",color:"#FFF",
    }} > <p>zexware.gmai.com</p>
    
    </Typography>
       
       </Typography>
        </Stack> 
         
            </Stack>


            <Stack spacing={"29px "} direction={"row"} sx={{width:"533px",height:"130px", 
            // border: "1px solid rgba(255, 255, 255, 0.22)",
}}>
                <Stack  direction={"row"} sx={{width:"250px",
                height:"130px",
                // border: "1px solid rgba(255, 255, 255, 0.22)",
                 display:"flex",
                 gap:"20px"
                 }}> 


            <Typography 
            sx={{width:"25px",
            height:"25px",
                          }}>
            <img src={MESSAGE} alt="message"></img>
            </Typography>
            <Typography  
              sx={{fontSize:"16px",
              color:"#FFF",
             
       }} >
        <Typography  sx={{}} >Email</Typography><br/> 
        <Typography sx={{gap:"20px" ,color:"#77ABFF"}}> Our friendly team is here to help.</Typography>

        <Typography    sx={{fontSize:"16px",color:"#FFF",
    }} > <p>zexware.gmai.com</p>
    
    </Typography>
       
       </Typography>
        </Stack> 
        <Stack  direction={"row"} sx={{width:"250px",
                height:"130px",
                // border: "1px solid rgba(255, 255, 255, 0.22)",
                 display:"flex",
                 gap:"20px"
                 }}> 


            <Typography 
            sx={{width:"25px",
            height:"25px",
                          }}>
            <img src={MESSAGE} alt="message"></img>
            </Typography>
            <Typography  
              sx={{fontSize:"16px",
              color:"#FFF",
             
       }} >
        <Typography  sx={{}} >Email</Typography><br/> 
        <Typography sx={{gap:"20px" ,color:"#77ABFF"}}> Our friendly team is here to help.</Typography>

        <Typography    sx={{fontSize:"16px",color:"#FFF",
    }} > <p>zexware.gmai.com</p>
    
    </Typography>
       
       </Typography>
        </Stack> 
         
            </Stack>
            </Stack>
            <Stack sx={{width:"533px",height:"650px", border: "1px solid rgba(255, 255, 255, 0.22)",  backgroundColor:"#1F2937"}}>
            <Stack spacing={"24px"} sx={{width:"469px",
                height:"500px",color:"white",
                //  border: "1px solid rgba(255, 255, 255, 0.22)",
                margin: "40px 32px",
                borderRadius:"8px"
               }}>
                <Typography sx={{
                    borderRadius:"22px",
                    color:"white"
                    }}>Name
                <TextField
                    sx={{width:"469px",borderRadius:"22px", backgroundColor:"#3B4D67A1",color:"white"}}
                    type="name"
                    placeholder="Your Full Name"/>
         
               </Typography>



               <Typography sx={{
                    borderRadius:"22px",
                    color:"white"
                    }}>Email
                <TextField
                    sx={{width:"469px",borderRadius:"22px", backgroundColor:"#3B4D67A1",}}
                    type="email"
                  
                    placeholder="you@company.com"/>
         
               </Typography>

               <Typography sx={{
                    borderRadius:"22px",
                    color:"white"
                    }}> Subject
                <TextField
                    sx={{width:"469px",borderRadius:"22px", backgroundColor:"#3B4D67A1",color:"white"}}
                    type="text"
                    placeholder="Enter your Type of your Project"/>
         
               </Typography>

               <Typography sx={{
                    borderRadius:"22px",
                    color:"white"
                    }}> Message
               
                     <TextField   sx={{width:"469px" ,height:"100px", borderRadius:"2px", backgroundColor:"#3B4D67A1",color:"white"}}
          id="standard-multiline-static"
          
        
          multiline
          rows={3}
        
          /> 
               </Typography><Typography><Checkbox sx={{color:"white", borderRadius:"10px"}}/>You agree to our friendly privacy policy.</Typography>
               


        </Stack> 
                
                 <Button sx={{backgroundColor:"#2563EB",
                 color:"#FFFFFF", 
                 borderRadius:"8px",margin:"0px 32px 0px 32px"}} >Send message</Button>


            </Stack>
        </Stack>
    )
} 