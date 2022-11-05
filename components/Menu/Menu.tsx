import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "../../interfaces/MuiDrawer";
import ContactsIcon from "@mui/icons-material/Contacts";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Tooltip from "@mui/material/Tooltip";
import router from "next/router";

export default function Menu({ open }: MuiDrawer) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <List>
      {[
        { text: "Главная", url: "/", icon: <HomeIcon /> },
        { text: "Категории", url: "/category", icon: <ArticleIcon /> },
        { text: "Заметки", url: "/gists", icon: <EventNoteIcon /> },
        { text: "Контакты", url: "/contacts", icon: <MailIcon /> },
      ].map((item, index) => (
        <Tooltip
          key={index}
          title={item.text}
          placement="right-end"
          color={"red"}
        >
          <ListItem
            key={"list_item_" + index}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                setSelected(index);
                router.push(item.url);
              }}
              selected={selected === index}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
}
