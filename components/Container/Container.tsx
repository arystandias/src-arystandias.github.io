import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

interface PageInterface {
  children: JSX.Element;
}

export default function Page({ children }: PageInterface) {
  const theme = useTheme();
  //console.log(theme.palette);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: theme.palette.mode === "dark" ? "#222" : "#fff",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
