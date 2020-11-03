import React from "react";
import "../components/Banner.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from  "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
function Banner() {
    const [anchor,setAnchor] = React.useState(0);
    const open = Boolean(anchor);
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    }
    const handleClose = () => {
        setAnchor(null);
    }
    return(
        <div className="banner">
            <img className="banner" src="src/components/22589.jpg"/>
            <p className="banner" id="site-name">React Test Site</p>
            <div className="banner-appbar">
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu-button"
                aria-controls="hamburger-menu"
                onClick={handleMenu}
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="hamburger-menu"
                    anchorEl={anchor}
                    open={open}
                    onClose={handleClose}
                >
                <MenuItem><a href="./index.html">Home</a></MenuItem>
                <MenuItem><a href="./contact.html">Contact</a></MenuItem>
               
                </Menu>
                <Button variant="contained" href="./signin.html">
                    Sign in
                </Button>

            </Toolbar>
        </AppBar>
        </div>
    </div>
    );
}
export default Banner;