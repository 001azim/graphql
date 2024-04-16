import React from 'react'
import { Box,Typography,Divider } from '@mui/material';
import UserCard from './UserCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/system';

function SlideBar() {
  const users = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Smith" },
    { id: 3, firstName: "Alice", lastName: "Johnson" },
    { id: 4, firstName: "Bob", lastName: "Brown" }
  ];
 
  
  return (
  <Box backgroundColor={"#f7f7f7"}
  height="100vh"
  maxWidth="250px" padding={"10px"}>
    <Stack direction={"row"} justifyContent={"space-between"} >
    <Typography varient="h6">Chat</Typography>
<LogoutIcon/>
    </Stack>

<Divider/>


{users.map((item)=>{return<UserCard item={item}/> }
)}
  </Box>
  )
}

export default SlideBar
