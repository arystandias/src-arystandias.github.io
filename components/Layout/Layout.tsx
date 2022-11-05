import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Desktop from "../Drawer/Desktop";
import Mobile from "../Drawer/Mobile";

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children: children }: LayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return isMobile ? (
    <Mobile component={children} />
  ) : (
    <Desktop component={children} />
  );
}
