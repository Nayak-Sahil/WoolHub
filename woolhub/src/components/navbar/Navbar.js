import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const drawerWidth = 240;
const navItems = ["home", "products", "orders"];
const settings = ["Profile", "Account", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1.5, 1, 1.5, 1),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

const Navbar = (props) => {
  const { window } = props;

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchSubmitHandler = (e) => {
    e.preventDefault(); //form submit thvaa thi j form relode thaai te nai thseeeee
    // if agar keyword hoi to....trim thi aaju baaju ni space kaadhi devaa ni
    if (keyword.trim()) {
      // console.log(keyword.trim());
      //   history.push(`/products/${keyword}`);
      navigate(`/products/${keyword}`);
    } else {
      //   history.push("/products");
      navigate(`/products`);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // console.log(user.role);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", padding: "1rem", justifyContent: "center" }}>
        <Link style={{ color: "#d11b8b" }} href="/">
          <Image
            src="/assets/8467ddb4f769867b7185e3a6ceca1671.jpg"
            alt="My Awesome Website"
            height="100"
            width="100"
          />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item} style={{ color: "black" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center", textTransform: "capitalize" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {/* {user?.role === "admin" && ( */}
        <Link href={`/admin/dashboard`} style={{ color: "black" }}>
          <ListItem key="dashboard" disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", textTransform: "capitalize" }}
            >
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* )} */}
      </List>
    </Box>
  );
  // {
  //   navItems.map((item) => (
  //     <Link href={item === "dashboard" ? `/admin/${item}` : `/${item}`}>
  //       <Button key={item} sx={{ color: "#fff", fontVariant: "capitalize" }}>
  //         {item}
  //       </Button>
  //     </Link>
  //   ));
  // }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{ background: "#FFB26B" }}
        component="nav"
        position="sticky"
      >
        <Box sx={{ display: "flex" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: 0, sm: 2 }, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Link href="/">
              <Image
                style={{ borderRadius: "5rem" }}
                src="/assets/8467ddb4f769867b7185e3a6ceca1671.jpg"
                alt="My Awesome Website"
                height="50"
                width="50"
              />
            </Link>

            <Box
              ml={5}
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Link href={item} style={{ color: "black" }}>
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{ textAlign: "center", textTransform: "capitalize" }}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </Box>
          </Toolbar>
          <Box
            ml="auto"
            p={1}
            sx={{
              display: "flex",
              alignItem: "center",
            }}
          >
            {/* <form onSubmit={searchSubmitHandler}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </Search>
            </form> */}

            <Link href="/cart" style={{ color: "white" }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {/* <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge> */}
              </IconButton>
            </Link>

            <Link href="/profile" style={{ color: "white" }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge>
                  <PersonIcon />
                </Badge>
              </IconButton>
            </Link>

            <Box
              ml={2}
              sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
            >
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>
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
    </Box>
  );
};

export default Navbar;