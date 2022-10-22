import { createTheme } from "@mui/material/styles";

// A custom theme for this app|0px     |600px   |900px   |1200px  |1536px
let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 390,
            md: 640,
            lg: 1100,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            // updated
            main: "#301F16",
        },
        secondary: {
            main: "#FFFFFF",
            dark: "#000000",
            light: "#000000",
            contrastText: "#000000",
        },
        info: {
            main: "#E0E0E0",
            light: "#F1F2F2",
        },
    },
    typography: {
        fontFamily: "Poppins !important",
        button: {
            textTransform: "none",
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                contained:{
                    borderRadius:"none !important",
                },
                outlined:{
                    borderRadius:"none"
                },
                outlinedInfo:{
                   color:"#311C1C",
                   borderColor:"#311C1C"
                }
            }
        },
        MuiIconButton:{
           styleOverrides:{
            sizeLarge:{
                border:"1px solid #311C1C",
                borderRadius:0,
                padding:"5px 15px"
            }
            }
        }
    }
});

theme.typography.h1 = {
    
};
theme.typography.h2 = {
   
};
theme.typography.h3 = {
    
};
theme.typography.h5 = {
    
};
theme.typography.subtitle2 = {
   
};
theme.typography.body1 = {
  
};
theme.typography.body2 = {
   
};
// theme.components?.MuiButton?.styleOverrides?.outlinedInfo?.styleOverrides?.colorInherit
// theme.palette.secondary.

export default theme;
