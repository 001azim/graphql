import * as React from "react";
import { useParams } from "react-router";
import { Box, AppBar, Toolbar, Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import MessageCart from "./MessageCart";

const ChatScreen = () => {
  const { id, name } = useParams();

  return (
    <Box flexGrow={1}>
      <Box display={"flex"}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "green",
            boxShadow: 0,
            width: "auto",
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Toolbar>
            <Avatar src={`https://api.dicebear.com/8.x/personas/svg`} />
            {name}
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        backgroundColor="#f5f5f5"
        height="80vh"
        padding={"10px"}
        sx={{ overflow: "auto" }}
      >
        <MessageCart text="hi" date="432" direction="start" />
        <MessageCart text="hi" date="432" direction="end" />
        <MessageCart text="hi" date="432" direction="start" />
        <MessageCart text="hi" date="432" direction="end" />
      </Box>
      <TextField
        placeholder="enter your message"
        variant="standard"
        fullWidth
        multiline
        rows={2}
      />
    </Box>
  );
};

export default ChatScreen;
