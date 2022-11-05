import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import Head from "next/head";

//import { remark } from "remark";
//import strip from "strip-markdown";

interface item {
  data: string;
  url?: string;
}
interface GistItem {
  description: string;
  id: string;
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    borderRadius: 0,
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },

    cursor: "pointer",
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

interface GistItem {
  gist_id: string;
  gist_part_id?: string;
}

function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<item[]>([]);
  const [title, setTitle] = useState("");

  function loadGistBreadcrumb({ gist_id }: any) {
    if (router && router.query && gist_id) {
      return fetch("https://api.github.com/users/arystandias/gists")
        .then((resp) => resp.json())
        .then<GistItem[]>((items) => items)
        .then((resp) => {
          return resp;
        })
        .then((r) => {
          const filteredItems = r.filter((item) => {
            return item.id === gist_id;
          });

          if (filteredItems.length === 1) {
            setBreadcrumbs([
              { data: "Заметки", url: "/notes" },
              { data: filteredItems[0].description },
            ]);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }

    //  /notes
    if (router && !gist_id) {
      setBreadcrumbs([{ data: "Заметки", url: "/notes" }]);
    }
  }

  useEffect(() => {
    if (router.isReady && router.route === "/contacts") {
      setBreadcrumbs([{ data: "Контакты", url: "/contacts" }]);
    }
    if (router.isReady && router.route === "/category") {
      setBreadcrumbs([{ data: "Категории", url: "/category" }]);
    }
    if (router.isReady && router.route === "/news") {
      setBreadcrumbs([{ data: "Новости", url: "/news" }]);
    }
    if (router.isReady && router.route === "/posts") {
      setBreadcrumbs([{ data: "Статьи", url: "/posts" }]);
    }

    if (router.isReady && router.route === "/notes/note") {
      const gist_id = router.query.id;

      if (gist_id) {
        loadGistBreadcrumb({ gist_id: gist_id });
      }
    }

    // Страница /gists
    if (router.isReady && router.route === "/gists") {
      const { gist_id } = router.query;
      loadGistBreadcrumb({ gist_id: gist_id });
    }

    // /[...pages]
    if (router.isReady && router.route === "/[...pages]") {
      if (
        router.query.pages &&
        Array.isArray(router.query.pages) &&
        router.query.pages[0] === "posts"
      ) {
        setBreadcrumbs([{ data: "Статьи", url: "/posts" }]);
      }

      //Страница: /notes
      if (
        router.query.pages &&
        Array.isArray(router.query.pages) &&
        router.query.pages[0] === "gists"
      ) {
        setBreadcrumbs([{ data: "Заметки", url: "/gists" }]);
      }
    }
  }, [router.query]);

  return (
    <div role="presentation" style={{ padding: "10px" }}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>

      <nav>
        <Link href={"/"}>
          <StyledBreadcrumb
            component="a"
            label="Главная"
            sx={{ m: 0.5 }}
            icon={<HomeIcon fontSize="small" />}
          />
        </Link>
        {breadcrumbs.map((item, index) => {
          return index < breadcrumbs.length - 1 ? (
            <Link key={index} href={item.url as string}>
              <StyledBreadcrumb
                key={index}
                label={item.data}
                sx={{
                  m: 0.5,
                  cursor:
                    index < breadcrumbs.length - 1 ? "pointer" : "inherit",
                }}
                component="a"
              />
            </Link>
          ) : (
            <StyledBreadcrumb
              key={index}
              label={item.data}
              sx={{
                m: 0.5,
                cursor: "inherit",
              }}
              component="div"
            />
          );
        })}
      </nav>
    </div>
  );
}
export default Breadcrumbs;
