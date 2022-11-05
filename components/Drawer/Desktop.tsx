import React, { useState, useEffect } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Menu from "../Menu/Menu";
import { dark } from "@mui/material/styles/createPalette";
import { useRouter } from "next/router";
import Page from "../../interfaces/Page";
import darkScrollbar from "@mui/material/darkScrollbar";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
//import "../../public/static/fonts/minecraft-lcd.ttf";

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// Устанавливаем ширину сайдбара
const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

// Настраиваем основную тему
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          overflow: "hidden",
          color: "darkred",
          // backgroundColor: "grey",
          // "& h1": {
          //   color: "black",
          // },
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: { main: "#49bf3c" },

    info: {
      main: "#ff0000",
    },
    text: { secondary: "#49bf3c", primary: "#49bf3c" },
    action: {
      selected: "#ff0000",
      selectedOpacity: 0.2,
      activatedOpacity: 0.1,

      active: "#49bf3c",
      hover: "#49bf3c",
      hoverOpacity: 0.5,
      disabledOpacity: 0.1,
      focusOpacity: 0.2,
    },
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Desktop({ component }: Page) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [containerPadding, setContainerpadding] = useState<number>(0);

  useEffect(() => {
    if (router.isReady) {
      if (router.route === "/") {
        setContainerpadding(1);
      } else {
        setContainerpadding(2);
      }
    }
  }, [router.isReady]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <ThemeProvider theme={theme}>
            <Menu open={open} />
          </ThemeProvider>
          <Divider />
        </Drawer>
      </Box>
      <Main
        style={{
          paddingTop: 8,
          flexGrow: 1,
          marginLeft: "72px",
          background:
            "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2)), url(/static/templates/vscode/dark.png)",
        }}
      >
        {component}
      </Main>
    </ThemeProvider>
  );
}
