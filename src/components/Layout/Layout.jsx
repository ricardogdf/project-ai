import React from "react";
import Header from "../Header";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Toaster />
    </>
  );
}
