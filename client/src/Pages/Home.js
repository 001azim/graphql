import React from "react";
import { Box } from "@mui/system";
import SlideBar from "../components/SideBar";
import Welcome from "../components/Welcome";
import { Route, Routes } from "react-router-dom";
import ChatScreen from "../components/ChatScreen";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Welcome/>}/>
      <Route path="/:id/:name" element={<ChatScreen/>} />
    </Routes>
  );
};

function Home() {
  return (
    <Box display={"flex"}
    justifyContent={"Center"}
    alignItems={"center"}
    sx={{ flexGrow: 1 }} >
      <SlideBar />
      <AllRoutes />
    </Box>
  );
}

export default Home;
