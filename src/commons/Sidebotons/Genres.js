import ListItem from '@mui/material/ListItem';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,

  } from "@mui/material";


const Genres = () => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <FavoriteBorderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Genres" />
      </ListItemButton>
    </ListItem>
  );
};

export default Genres;