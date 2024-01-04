
import { Stack, Typography, useMediaQuery } from '@mui/material';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Matrics from './components/matrics';
import Services from './components/servesl';
import ServiceCard from './components/servescard';
import IC_CODE from "./assets/ic_code.png"
import IC_WEB from "./assets/ic_web.png"
import IC_DESKTOP from "./assets/ic_desktop.png"
import IC_MOBILE from "./assets/ic_mobile.png"
import Testimonialcard from './components/testimonialcard';
import Integration from './components/Integration';
import Integrationcard from './components/integrationcard ';
import STRIPE from "./assets/ic_stripe.png";
import Text from './components/text';
// import HERO_BG from "./assets/brand/hero_bg.png"
import Input from './components/input';
import Team from './components/team';
import IC_X from "./assets/ic_x.png"
import IC_IN from "./assets/ic_in.png"
import IC_SOCIALICON from "./assets/ic_socialicon.png"
import AVATAR from "./assets/avatar.png"
import GLOW from "./assets/brand/glow.png"
import Footer from './components/Footer';
import BG_DOTS from "./assets/brand/bg_dots.png"

 export default function App() {
  const desktop = useMediaQuery("screen and (min-width: 710px)");
  //  let about = { about1="NodeJS REST API" 
  //  about2="GraphQL API"
  //  about3="Poti API"}
  return (
   
    <Stack sx={{
      bgcolor: "#030712",
           scrollBehavior: "smooth",}} >
        <Stack sx={{height:"800px",
        //  backgroundColor:"#030712",
      }}>
           {/* hero section */}
     <Header/> 
     <Hero /> 
     </Stack>
     <Stack sx={{ 
      //  backgroundColor:"#030712",
       alignItems:"center" }}>
      <Stack>  
     <Matrics />
     </Stack>
    
     {/* service section */}
     <Stack justifyContent={"center"} alignItems={"center"}>
          <img
            src={GLOW}
            style={{
              position: "absolute",
              marginTop: "240px",
              overflow: "hidden",
              height: "100%",
              width: "100%",
            }} alt=''
          />
        </Stack>
     <Services name="Services"/>
     <Stack spacing={"48px"} >
    
     <Stack direction={"row"}spacing={"25px"}>
    
     <ServiceCard  username="Bot Development"
     about1="NodeJS REST API"
     about2="GraphQL API"
     about3="Poti API"
     src= {IC_CODE}/>

     <ServiceCard username="Web App Development"
     about1="React + MUIv5"
     about2="NextJS + Tailwindcss"
     about3="Widgets"
      src= {IC_WEB}/>

     <ServiceCard username="Desktop App Development"
       about1=""
       about2=""
       about3=""  
       src= {IC_DESKTOP}/>
     <ServiceCard username="Android App Development"
     about1=""about2=""about3=""
      src= {IC_MOBILE}/>
     </Stack >
     <Stack direction={"row"}
     spacing={"25px"} >
      <ServiceCard  username="Bot Development"
      about1="NodeJS REST API"
      about2="GraphQL API"
      about3="Poti API"
      src= {IC_CODE}
        />
     <ServiceCard 
     username="Web App Development"
     about1="React + MUIv5"
     about2="NextJS + Tailwindcss"
     about3="Widgets"
      src= {IC_WEB}/>
     <ServiceCard
      username="Desktop App Development"
        about1=""about2=""about3=""  
        src= {IC_DESKTOP}/>
     <ServiceCard username="Android App Development"
     about1=""about2=""about3="" 
     src= {IC_MOBILE}/>
    </Stack>
    </Stack>
     <Services name="Testimonials "/>
     <Stack justifyContent={"center"} alignItems={"center"}>
          <img
            src={GLOW}
            style={{
              position: "absolute",
              marginTop: "-240px",
              overflow: "hidden",
              height: "100%",
              width: "100%",
            }}alt=''
          />
        </Stack>
     <Stack direction={"row"}>
     <Testimonialcard Author="shahid ali"/>
     <Testimonialcard Author="Ahmed Jamal "/>
     <Testimonialcard Author="Sattar "/>
     </Stack>
     <Stack justifyContent={"center"} alignItems={"center"}>
          <img
            src={GLOW}
            style={{
              position: "absolute",
              marginTop: "240px",
              overflow: "hidden",
              height: "100%",
              width: "100%",
            }} alt=''
          />
        </Stack>
        <Stack>
<img
  src={BG_DOTS}
  alt=""
  style={{
    position: "absolute",
    right: 0,
    marginTop: "-250px",
    pointerEvents: "none",
  }}
/>

         </Stack>
            {/* Integration heading*/}
            
     <Integration/>
     <Stack>
<img
  src={BG_DOTS}
  alt=""
  style={{
    position: "absolute",
    right: 0,
    marginTop: "-250px",
    pointerEvents: "none",
  }}
/>

</Stack>
       <Stack  
       sx={{border: "1px solid rgba(255, 255, 255, 0.63)",
         backdropFilter: "blur(0px)",
         alignItems:"center",justifyContent:"center"}}
      >
     <Stack
 
        sx={{display:"grid",
        gridTemplateColumns:"290px 290px 290px 290px",
        alignItems:"center",
        gridAutoColumns:"minmax(200px,auto)",
        gridAutoRows:"minmax(200px,auto)",
     
       width: "1225px",
        height:"640px",
         // border:"border: 1px solid red"
       }}>
        <Integrationcard 
       username="Stripe"
       about2="Stripe Subscriptions Invoices Payment Wall"
     
       src= {STRIPE}/>
       <Integrationcard
       username="Bot Development"
       about1="NodeJS REST API"
       src= {STRIPE}/>
       <Integrationcard 
       username="Bot Development"
        about1="NodeJS REST API"
       src= {STRIPE}/><Integrationcard 
       username="Bot Development"
       about1="NodeJS REST API"
       src= {STRIPE}/>
       <Integrationcard
       username="Stripe"
       about2="Stripe Subscriptions Invoices Payment Wall"
        src= {STRIPE}style={{backgroundColor:"red"}} />
       <Integrationcard
        username="Bot Development"
        about1="NodeJS REST API"
        src= {STRIPE}/>
       <Integrationcard 
       username="Bot Development"
       about1="NodeJS REST API"
       src= {STRIPE}/><Integrationcard 
       username="Bot Development"
       about1="NodeJS REST API"
       src= {STRIPE}/>
     
    
      </Stack>
      </Stack>
     <Stack >
    
     {/* <Text heading="Got a Project? Lets Talk"
     about="Let's work together to build the bots, apps,
     and APIs that will help your business grow."
     />
     <Input/> */}
      <Stack justifyContent={"center"} alignItems={"center"}>
          <img
            src={GLOW}
            style={{
              position: "absolute",
              marginTop: "240px",
              overflow: "hidden",
              height: "100%",
              width: "100%",
            }} alt=''
          />
        </Stack>
     <Text heading="Meet Our Team"
     about="Our team is passionate about helping businesses grow through technology."
     />
     <Stack direction={"row"} sx={{
      
     }}> 
     <Team
     profile={AVATAR}
     heading="Zaid Schwartz"
     user="Backend Developer"
     text1="Former frontend dev for Linear,"
      text2="Coinbase, and Postscript."
     icon1=  {IC_SOCIALICON}
     icon2= {IC_IN}
     icon3= {IC_X}
     />
    <Team
     profile={AVATAR}
     heading="Zaid Schwartz"
     user="Backend Developer"
     text1="Former frontend dev for Linear,"
      text2="Coinbase, and Postscript."
     icon1=  {IC_SOCIALICON}
     icon2= {IC_IN}
     icon3= {IC_X}
     />
     <Team
     profile={AVATAR}
     heading="Zaid Schwartz"
     user="Backend Developer"
     text1="Former frontend dev for Linear,"
      text2="Coinbase, and Postscript."
     icon1=  {IC_SOCIALICON}
     icon2= {IC_IN}
     icon3= {IC_X}
     /></Stack>
     
    
     </Stack>
     </Stack>
     <Stack
      sx={{marginTop:"100px"}}>

     <Footer/>
     
     </Stack>
     </Stack>
    
    
   
  );
  
}