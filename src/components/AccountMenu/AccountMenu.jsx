import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Logout from "@mui/icons-material/Logout";
import { Box, IconButton, Tooltip } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const AccountMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Tooltip title="Minha conta">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              fontSize: "16px",
              bgcolor: deepPurple[500],
              cursor: "pointer",
            }}
          >
            R
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "200px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            backgroundColor: "var(--secondary-background)",
            color: "var(--primary-color)",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              backgroundColor: "var(--secondary-background)",
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Perfil
        </MenuItem>
        <Divider sx={{ borderColor: "var(--border-color)" }} />
        <MenuItem onClick={() => navigate("/financial")}>
          <ListItemIcon>
            <CurrencyExchangeIcon
              sx={{ fill: "var(--primary-color)" }}
              fontSize="small"
            />
          </ListItemIcon>
          Financeiro
        </MenuItem>
        <MenuItem onClick={() => navigate("/consumption")}>
          <ListItemIcon>
            <AutoGraphIcon
              sx={{ fill: "var(--primary-color)" }}
              fontSize="small"
            />
          </ListItemIcon>
          Consumo
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout sx={{ fill: "var(--primary-color)" }} fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
