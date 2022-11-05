import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        typography: "body1",
        flexDirection: "column",
      }}
      onClick={preventDefault}
    >
      <Link sx={{ color: "#ccc" }} href="#" display="block">
        <Typography>{"г. Актау"}</Typography>
      </Link>
      <Link href="tel: +77082125522" underline="always" sx={{ color: "#ccc" }}>
        <a>+77082125522</a>
      </Link>
    </Box>
  );
}
