import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import GaugeMeter from "./GaugeMeter";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import APPBAR from "./APPBAR";
const App = () => {
  // return ;
  return (
    <>
      <APPBAR />

      <br />
      <br />
      <br />

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          columns={16}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <GaugeMeter />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <GaugeMeter />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
