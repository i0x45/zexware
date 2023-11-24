import { Button, Stack } from "@mui/material";
import React from "react";


export default function Simplebutton (){
return(
    <Stack
    direction={"ltr"}
    sx={{
      width: "100%px",
      height: "24px",
      display: "flex",
      flexDirection: "row",
      color: "white",
    }}
  >
<Button>product</Button>
<Button>Serves</Button>
<Button>Blog</Button>
<Button>Content</Button>
<Button>Company</Button>
    </Stack>
);
}
