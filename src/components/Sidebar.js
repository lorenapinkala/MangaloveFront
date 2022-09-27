import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Favourite from "../commons/Sidebotons/Favourite";
import Genres from "../commons/Sidebotons/Genres";
import List from "@mui/material/List";

const Sidebar = () => {
  return (
    <Box sx={{ width: "25%", backgroundColor: "#f1d7ff" }}>
      <Stack
        spacing={3}
        sx={{
          paddingTop: "65px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          spacing: 1,
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 250,
            position: "fixed",
            backgroundColor: "#f1d7ff",
            minHeight: "100vh",
          }}
        >
          <Favourite />
          <Genres />
        </List>
      </Stack>
    </Box>
  );
};

export default Sidebar;
