import Home from "./components/Home";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
      <Navbar />
      </Box>

      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
      </Routes>
    </>
  );
}

export default App;
