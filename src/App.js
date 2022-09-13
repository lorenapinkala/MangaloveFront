import Navbar from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} /> */}
        </Routes>
      </Box>
    </>
  );
}

export default App;
