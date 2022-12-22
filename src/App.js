import { Box, Stack } from "@mui/material";
import React from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box className="App">
      <Navbar></Navbar>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        // sx={{ backgroundColor: "secondary.main" }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
