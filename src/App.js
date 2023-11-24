
import { Stack } from '@mui/material';
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

 export default function App() {
  //  let about = { about1="NodeJS REST API" 
  //  about2="GraphQL API"
  //  about3="Poti API"}
  return (
   
    <Stack sx={{height:"800vh", backgroundColor:"#030712",}} >
        <Stack sx={{height:"800px", backgroundColor:"#030712",
      }}>
     <Header/> 
     <Hero /> 
     </Stack>
     <Stack sx={{  backgroundColor:"#030712",alignItems:"center" }}>
     <Matrics />
     {/* service section */}
     <Services name="Services"/>
     <Stack spacing={"48px"} >
     <Stack direction={"row"}spacing={"25px"}>
     <ServiceCard  username="Bot Development"about1="NodeJS REST API"about2="GraphQL API"about3="Poti API"src= {IC_CODE}/>
     <ServiceCard username="Web App Development"about1="React + MUIv5"about2="NextJS + Tailwindcss"about3="Widgets" src= {IC_WEB}/>
     <ServiceCard username="Desktop App Development"  about1=""about2=""about3=""  src= {IC_DESKTOP}/>
     <ServiceCard username="Android App Development"about1=""about2=""about3="" src= {IC_MOBILE}/>
     </Stack >
     <Stack direction={"row"}spacing={"25px"} ><ServiceCard  username="Bot Development"about1="NodeJS REST API"about2="GraphQL API"about3="Poti API"src= {IC_CODE}
        />
     <ServiceCard username="Web App Development"about1="React + MUIv5"about2="NextJS + Tailwindcss"about3="Widgets" src= {IC_WEB}/>
     <ServiceCard username="Desktop App Development"  about1=""about2=""about3=""  src= {IC_DESKTOP}/>
     <ServiceCard username="Android App Development"about1=""about2=""about3="" src= {IC_MOBILE}/>
    </Stack>
    </Stack>
     <Services name="Testimonials "/>
     <Stack direction={"row"}>
     <Testimonialcard Author="shahid ali"/>
     <Testimonialcard Author="Ahmed Jamal "/>
     <Testimonialcard Author="Sattar "/>
     </Stack>
     <Integration/>

     <Stack
 
       sx={{display:"grid",
       gridTemplateColumns:"290px 290px 290px 290px",
       alignItems:"center",
       gridAutoColumns:"minmax(200px,auto)",
       gridAutoRows:"minmax(200px,auto)",
     
      width: "1225px",
      height:"640px",
        border:"1px solid rgba(255, 255, 255, 0.63)",  
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
     <Text heading="Got a Project? Lets Talk"
     about="Let's work together to build the bots, apps,
     and APIs that will help your business grow."
     />
     <Input/>
     <Text heading="Meet Our Team"
     about="Our team is passionate about helping businesses grow through technology."
     />
     <Stack sx={{width:"1130px",
       height:"810px",
       display:"grid",
       maxWidth: "1280px",
       gridTemplateColumns:"332px 332px 332px 332px",
       alignItems:"center",
       gridAutoColumns:"minmax(200px,auto)",
       gridAutoRows:"minmax(200px,auto)",
        border:"1px solid rgba(255, 255, 255, 0.63)"
     }}> 
     <Team />
     <Team />
     <Team />
     <Team />
     <Team />
     <Team />
     <Team /> <Team />
     
     
     </Stack>
     </Stack>
     </Stack>
    
    
   
  );
  
}