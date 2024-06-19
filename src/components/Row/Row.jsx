import Box from "@mui/material/Box";
import React from "react";

const Row = ({ children, ...boxProps }) => {
  return (
    <Box display="flex" {...boxProps}>
      {children}
    </Box>
  );
};

export default Row;
