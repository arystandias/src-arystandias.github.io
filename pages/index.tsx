import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageGridDesktop from "../components/ImageGrid/Desktop";
import ImageGridMobile from "../components/ImageGrid/Mobile";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return isMobile ? <ImageGridMobile /> : <ImageGridDesktop />;
}
