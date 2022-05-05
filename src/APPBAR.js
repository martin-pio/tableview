import React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const APPBAR = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            textAlign="center"
          >
            Some Text Here
          </Typography>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default APPBAR;
