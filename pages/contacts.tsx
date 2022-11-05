import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Footer from "../components/Footer/Footer";

import TabPanel from "../components/TabPanel/TabPanel";
import MobileTabPanel from "../components/TabPanel/MobileTabPanel";

import Link from "@mui/material/Link";

export default function Contacts() {
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  //console.log(router.query);

  function getHeaderImage() {
    if (!isMobile) {
      return "/languages/common/header-desktop.png";
    }

    return "/languages/common/header-mobile.png";
  }

  function getAvatarImage(): string {
    return "https://avatars.githubusercontent.com/u/99656718?s=400&u=b16c14cd4a5265dc96b01da7fb3a83c73650c27c&v=4";
  }

  function getMobile() {
    return (
      <React.Fragment>
        <img
          src={getHeaderImage()}
          width={"100%"}
          height={"auto"}
          //srcSet={`${item.img}`}
          alt={"header_image"}
          loading="lazy"
        />
        <Box sx={{ p: 0 }}>
          <>
            <Breadcrumbs />
            <Box
              sx={{
                p: 5,
                minHeight: "90vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-start",
              }}
            >
              <MobileTabPanel />
            </Box>
            <Footer />
          </>
        </Box>
      </React.Fragment>
    );
  }
  function getDesktop() {
    return (
      <React.Fragment>
        <img
          src={getHeaderImage()}
          width={isMobile ? "auto" : "100%"}
          height={isMobile ? "auto" : "auto"}
          //srcSet={`${item.img}`}
          alt={"header_image"}
          loading="lazy"
        />
        <Box sx={{ p: 0 }}>
          <>
            <Breadcrumbs />
            <Box
              sx={{
                p: 5,
                minHeight: "90vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-start",
              }}
            >
              <>
                <Link href={getAvatarImage()} underline="always">
                  <img
                    src={getAvatarImage()}
                    alt={"avatar_image"}
                    loading="lazy"
                    width={"100%"}
                    height={"auto"}
                  />
                </Link>
                <TabPanel />
              </>
            </Box>
            <Footer />
          </>
        </Box>
      </React.Fragment>
    );
  }

  return isMobile ? getMobile() : getDesktop();
}
