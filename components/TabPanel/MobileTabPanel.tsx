import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Contacts from "../TabPanel/Contacts";
import Head from "next/head";
import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Paper from "@mui/material/Paper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  function getAvatarImage(): string {
    return "https://avatars.githubusercontent.com/u/99656718?s=400&u=b16c14cd4a5265dc96b01da7fb3a83c73650c27c&v=4";
  }

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
  const [value, setValue] = useState(0);
  const [firstTab, setFirstTab] = useState("");

  function getAvatarImage(): string {
    return "https://avatars.githubusercontent.com/u/99656718?s=400&u=b16c14cd4a5265dc96b01da7fb3a83c73650c27c&v=4";
  }

  useEffect(() => {
    if (!firstTab) {
      fetch("https://api.github.com/users/arystandias")
        .then((response) => response.json())
        .then((response) => setFirstTab(response.bio)); //console.log(response)
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Обо мне" {...a11yProps(0)} />
            <Tab label="Контакты" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Paper
            variant="outlined"
            square
            sx={{ p: 0.1, backgroundColor: "#fff", mb: 1 }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                //bgcolor: deepOrange[500],
              }}
              variant="square"
            >
              <img
                src={getAvatarImage()}
                alt={"Arystan Dias"}
                width={"100%"}
                height={"auto"}
              />
            </Avatar>
          </Paper>
          {firstTab}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Contacts />
        </TabPanel>
      </Box>
    </>
  );
}
