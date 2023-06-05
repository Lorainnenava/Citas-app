import React from "react";
import { TData } from "./types";
import { Box } from '@mui/material';
import { DatingList } from "./DatingList";


export const Admin: React.FC<TData> = ({ profileAuth }) => {
  return (
    <Box sx={{width:"100%", height:"89%"}}>
      <DatingList profileAuth={profileAuth}/>
    </Box>
  );
};
