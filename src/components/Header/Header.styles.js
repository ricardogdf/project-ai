import { styled } from "@mui/material";

export const StyledHeader = styled("header", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '3.5rem',
    background: 'var(--terciary-background)',
    color: '#FFF',
    margin: '0 auto',
    padding: '0px 80px',
    justifyContent: "space-between",
    backgroundColor: "var(--terciary-background)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));