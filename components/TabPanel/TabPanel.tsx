import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Contacts from "../TabPanel/Contacts";
import Head from "next/head";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  // React.useEffect(() => {
  //   //fetch("https://api.github.com/users/arystandias")
  //   //fetch("https://api.github.com/gists/public")
  //   fetch("https://api.github.com/users/arystandias/gists")
  //     .then((response) => response.json())
  //     .then((data) => JSON.stringify(data))
  //     .then((objects) => {
  //       //console.log("Objects:");
  //       //console.log(objects);
  //       //setGistItems(JSON.parse(objects));
  //     });
  // }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [firstTab, setFirstTab] = React.useState("");
  const [secondTab, setSecondTab] = React.useState();
  const [thirdTab, setThirdTab] = React.useState();

  React.useEffect(() => {
    if (!firstTab) {
      fetch("https://api.github.com/users/arystandias")
        .then((response) => response.json())
        .then((response) => setFirstTab(response.bio)); //console.log(response)
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function getAvatarImage(): string {
    return "https://avatars.githubusercontent.com/u/99656718?s=400&u=b16c14cd4a5265dc96b01da7fb3a83c73650c27c&v=4";
  }

  return (
    <>
      <Head>
        <title>Арыстан Диас</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Арыстан Диас Веб Программист" />
        <meta
          name="keywords"
          content="Арыстан Диас, Arystan Dias, Веб разработчик Актау, Веб разработчик Алматы, Веб разработчик Астана, Roblox разработчик Казахстан, Шандыров Аскар, Flatter разработчик Казахстан, Flatter разработчик Актау, JavaScript разработчик Казахстан, React разработчик Актау, React разработчик Казахстан, NextJS разработчик Казахстан, php разработчик Казахстан, php разработчик Актау, Android разработчик Казахстан, Python разработчик Казахста, Администратор Linux Казахстан, Администратор Веб серверов Казахстан, Хостинг Казахстан, IT специалист Казахстан, IT специалист Актау, 1C Программист Казахстан, 1C Программист Актау, Разработчик Интернет Магазинов Казахстан"
        />
      </Head>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          paddingLeft: 2,
          paddingTop: 0,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", paddingLeft: 2 }}>
          <Tabs value={value} onChange={handleChange} aria-label="example">
            <Tab label="Обо мне" {...a11yProps(0)} />
            {/* <Tab label="Проекты" {...a11yProps(1)} /> */}
            <Tab label="Контакты" {...a11yProps(0)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {firstTab}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Contacts />
        </TabPanel>
      </Box>
    </>
  );
}
