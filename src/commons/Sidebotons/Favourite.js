import ListItem from "@mui/material/ListItem";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Favourite = () => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <FavoriteBorderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItemButton>
    </ListItem>
  );
};

export default Favourite;
