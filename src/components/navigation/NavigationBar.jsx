import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TopNav from "./TopNav";

const drawerWidth = 240;

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
    submenu: [
      {
        label: "Company Overview",
        path: "/about",
      },
      {
        label: "Our Board",
        path: "/board",
      },
      {
        label: "Career",
        path: "/career",
      },
    ],
  },
  
  {
    label: "Our Product",
    path: "/product",
  },
  {
    label: "Apply for Loan",
    path: "/loan",
  },
  {
    label: "Support",
    path: "/support",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function NavigationBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    handleDrawerToggle(); // Close the drawer after clicking a menu item
  };

  const handleSubmenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left", padding: "18px", color: "#145088" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Boctrust MFB
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.submenu ? (
              <>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  onClick={handleSubmenuClick}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleSubmenuClose}
                  onClick={handleSubmenuClose}
                >
                  {item.submenu.map((submenuItem) => (
                    <MenuItem
                      key={submenuItem.label}
                      component={Link}
                      to={submenuItem.path}
                      onClick={handleSubmenuClose}
                    >
                      {submenuItem.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{ textAlign: "left" }}
                selected={activeLink === item.label}
                onClick={() => handleLinkClick(item.label)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#145088" }}
        position="fixed"
      >
        <Box>
          <TopNav />
        </Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Growing Together
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.submenu ? (
                  <Button
                    aria-controls="submenu"
                    aria-haspopup="true"
                    onClick={handleSubmenuClick}
                    sx={{
                      color: activeLink === item.label ? "#fff" : "#ccc",
                      marginRight: "16px",
                      fontSize: activeLink === item.label ? "18px" : "12px",
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      sx={{
                        color: activeLink === item.label ? "#fff" : "#ccc",
                        marginRight: "16px",
                        fontSize: activeLink === item.label ? "18px" : "12px",
                      }}
                      onClick={() => handleLinkClick(item.label)}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavigationBar.propTypes = {
  window: PropTypes.func,
};

export default NavigationBar;

