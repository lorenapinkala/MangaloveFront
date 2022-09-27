import ListItem from '@mui/material/ListItem';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Genres" />
      </ListItemButton>
    </ListItem>
  );
};

export default Genres;