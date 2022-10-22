import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import * as React from 'react';
import logo from "../assets/icons/logo.svg";
import theme from "../universal/theme";
const navItems = ['Jewelry',"Collections", 'About', 'Contact'];

const DrawerAppBar=()=> {
  const [mobileOpen, setMobileOpen] = React.useState(false);
 const classes=styles()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileDrawer = (
    <Box onClick={handleDrawerToggle} className={classes.textCenter}>
        <Image src={logo} alt="logo"/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className={classes.textCenter}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
     <Box className={classes.wrapper}>
      <AppBar className={classes.wrapperAppber} color='secondary' component="div">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menu}
           
          >
            <MenuIcon />
          </IconButton>
     
    <Box  className={classes.logo}  > <Image src={logo} alt="logo"/></Box> 
      
      <Box className={classes.content}>
        {navItems.map((item) => (
          <Button key={item} >
            {item}
          </Button>
        ))}
       </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className={classes.mobileScreen}
        >
          {mobileDrawer}
        </Drawer>
      </Box>
   </Box>
  );
}
export default DrawerAppBar
const styles = makeStyles({
 textCenter:{
    textAlign: 'center'
 },
 wrapper:{
  flexGrow: 1 ,
 },
 wrapperAppber:{
  position:"static",
 },
 menu:{
marginRight:"2",
[theme.breakpoints.up("sm")]: {
    display:"none !important"
},
 },
 logo:{
   flexGrow: 1 ,
    [theme.breakpoints.up("sm")]: {
        display:"block ",  
    },
    [theme.breakpoints.down("sm")]: {
        display:"none ",   
    },
},
content:{
    [theme.breakpoints.up("sm")]: {
        display:"block "
    },
    [theme.breakpoints.down("sm")]: {
        display:"none "
    },
},
mobileScreen:{
            display:   'none',
            [theme.breakpoints.down("sm")]: {
                display:"block"
            },
            [`& .MuiDrawer-paper`]:{
                boxSizing: 'border-box',
                width: 200    
            }
    
},
})