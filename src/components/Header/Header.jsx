import { Typography } from "@mui/material";
import { StyledHeader } from "./Header.styles";
import { Link } from "react-router-dom";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountMenu from "../AccountMenu/AccountMenu";

const Header = () => {
  return (
    <StyledHeader>
      <ul style={{ display: "flex", gap: "40px", listStyle: "none" }}>
        <li>
          <Link
            style={{
              color: "var(--primary-color)",
              display: "flex",
              alignItems: "center",
            }}
            to={"/home"}
          >
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "var(--primary-color)", textDecoration: "none" }}
            to={"/tasks"}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Tarefas
            </Typography>
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "var(--primary-color)", textDecoration: "none" }}
            to={"/cryptography"}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Criptografias
            </Typography>
          </Link>
        </li>
      </ul>
      <AccountMenu />
    </StyledHeader>
  );
};

export default Header;
