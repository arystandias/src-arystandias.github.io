import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const theme = useTheme();

  return (
    <BottomNavigation
      sx={{
        p: 1,
        width: "100%",
        height: "100%",

        bottom: 0,
        backgroundColor: grey[800],
      }}
      //value={value}
    >
      <BottomNavigationAction
        label="Все права защищены © Сайт разработал Арыстан Диас"
        showLabel={true}
        //icon={}
        sx={{ fontSize: "1px" }}
      />
    </BottomNavigation>
  );
}
export default Footer;
