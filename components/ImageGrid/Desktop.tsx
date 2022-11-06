import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function ImageListDesktop() {
  const router = useRouter();
  const theme = useTheme();
  const size = useWindowSize();
  const [hover, setHover] = useState(-1);
  const isTabet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (isTabet) {
      console.log("tablet");
    } else {
      console.log("desktop");
    }
  }, [isTabet]);
  // gap={8}
  return (
    <ImageList
      //gap={6}
      cols={6}
      //rowHeight={size.height / 4}
      sx={{ overflow: "hidden", mt: 2 }}
    >
      {itemData.map((item, index) => (
        <Link href={item.route} key={index}>
          <ImageListItem
            key={item.img}
            style={{
              cursor: "pointer",
              opacity: index === hover ? 1.0 : 0.9,
            }}
            onMouseOver={(e) => {
              setHover(index);
            }}
          >
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    title: "JavaScript",
    route: "/category/javascript",
    img: "/posts/javascript/logo.png",
  },
  {
    title: "TypeScript",
    route: "/category/typescript",
    img: "posts/typescript/logo.png",
  },
  {
    title: "Docker",
    route: "/category/docker",
    img: "/posts/docker/logo.png",
  },
  {
    title: "Bash",
    route: "/category/bash/",
    img: "/posts/bash/logo.png",
  },
  {
    title: "MySQL",
    route: "/category/mysql",
    img: "/posts/mysql/logo.png",
  },
  {
    title: "React",
    route: "/category/react",
    img: "/posts/react/logo.png",
  },
  {
    title: "php",
    route: "/category/php",
    img: "/posts/php/logo.png",
  },
  {
    title: "kubernetes",
    route: "/posts/kubernetes",
    img: "/posts/kubernetes/logo.png",
  },
  {
    img: "/posts/c_sharp/logo.png",
    title: "c#",
    route: "/category/c_sharp",
  },
  {
    title: "node_js",
    route: "/category/node_js",
    img: "/posts/node_js/logo.png",
  },
  {
    title: "yii",
    route: "/category/yii",
    img: "/posts/yii/logo.png",
  },
  {
    img: "/posts/golang/logo.png",
    title: "golang",
    route: "/category/golang/logo.png",
  },
  {
    img: "/posts/html5/logo.png",
    title: "html5",
    route: "/category/html5",
  },
  {
    img: "/posts/redis/logo.png",
    title: "redis",
    route: "/category/redis",
  },
  {
    title: "google",
    route: "/category/google",
    img: "/posts/google/logo.png",
  },
  {
    img: "/posts/html5/logo.png",
    title: "html5",
    route: "/category/html5",
  },
  {
    img: "/posts/redis/logo.png",
    title: "redis",
    route: "/category/redis",
  },
  {
    title: "1C",
    route: "/category/1c",
    img: "/posts/1c/logo.png",
  },
];
