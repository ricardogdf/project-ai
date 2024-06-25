import { styled } from "@mui/material";

export const StyledHeader = styled("header", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    width: 'calc(100% - 160px)',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    margin: '0 auto',
    padding: '0px 80px',
    color: "var(--primary-color)",
    backgroundColor: "var(--terciary-background)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));