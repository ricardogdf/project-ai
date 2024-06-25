import React from "react";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Header />
      {children}
      <Toaster />
    </Box>
  );
}
