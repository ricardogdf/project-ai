import { Avatar, Typography } from "@mui/material";
import { StyledHeader } from "./Header.styles";
import { deepPurple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <ul style={{ display: "flex", gap: "40px" }}>
        <li>
          <Link
            style={{
              color: "var(--primary-color)",
              display: "flex",
              alignItems: "center",
            }}
            to={"/"}
          >
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link style={{ color: "var(--primary-color)" }} to={"/tasks"}>
            <Typography variant="subtitle1" fontWeight="bold">
              Tarefas
            </Typography>
          </Link>
        </li>
        <li>
          <Link style={{ color: "var(--primary-color)" }} to={"/cryptography"}>
            <Typography variant="subtitle1" fontWeight="bold">
              Criptografias
            </Typography>
          </Link>
        </li>
      </ul>
      <Avatar
        onClick={() => navigate("/login")}
        sx={{
          fontSize: "16px",
          bgcolor: deepPurple[500],
          width: 36,
          height: 36,
          cursor: "pointer",
        }}
      >
        R
      </Avatar>
    </StyledHeader>
  );
};

export default Header;
