import React from "react";
import "./Login.styles.js";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import Row from "../../components/Row/Row.jsx";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const validationSchema = object({
    email: string().email("Email inválido").required("Requerido"),
    password: string().required("Requerido"),
  });

  const handleSubmit = ({ email, password }) => {
    console.log("email", email);
    console.log("password", password);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema,
  });

  const ColorButton = styled(Button)(() => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: "16px",
    marginTop: "16px",
    height: "52px",
    textTransform: "none",
    borderColor: "var(--border-color)",
    color: "var(--border-color)",
  }));

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        mb={4}
        sx={{
          width: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography mb="24px" variant="h4" fontWeight="bold" color="#000">
          Seja bem-vindo!
        </Typography>
        <TextField
          sx={{ height: "52px" }}
          fullWidth
          name="email"
          label={"Email"}
          type={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box mb={4}>
        <TextField
          sx={{ height: "52px" }}
          fullWidth
          name="password"
          label={"Password"}
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Row flexDirection="column" alignItems="center" justifyContent="center">
        <LoadingButton
          sx={{ height: "52px" }}
          fullWidth
          type="submit"
          loading={false}
          loadingPosition="end"
          variant="contained"
        >
          {"Continuar"}
        </LoadingButton>
        <Typography
          sx={{ m: "16px 0" }}
          variant="caption"
          fontSize="14px"
          color="#000"
        >
          Não tem uma conta?{" "}
          <Link
            sx={{ cursor: "pointer" }}
            underline="none"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Resgistrar
          </Link>
        </Typography>
      </Row>

      <Divider sx={{ color: "var(--border-color)", fontSize: "12px" }}>
        OU
      </Divider>
      <Row flexDirection="column">
        <ColorButton startIcon={<GoogleIcon />} variant="outlined">
          Continuar com o google
        </ColorButton>
        <ColorButton startIcon={<FacebookIcon />} variant="outlined">
          Continuar com o facebook
        </ColorButton>
      </Row>
    </form>
  );
}

export default Login;
