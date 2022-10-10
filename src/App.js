import Home from "./components/Home";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <CssBaseline />
      <Box>
      <Navbar />
      <Sidebar />
      </Box>

      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
