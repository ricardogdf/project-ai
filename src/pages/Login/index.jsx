import React from "react";
import "./Login.styles.js";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import Row from "../../components/Row/Row.jsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonFacebook from "../../components/ButtonFacebook";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../hooks/login.js";
import Toast from "../../components/Toast/Toast.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/authContext.js";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);

  const validationSchema = object({
    email: string().email("Email inválido").required("Requerido"),
    password: string().required("Requerido"),
  });

  const handleSubmit = async (formData) => {
    setIsloading(true);
    try {
      const { data } = await handleLogin(formData);

      if (data.ID) {
        login(data.ID);
        navigate("/home");
        Toast.success({
          message: "Login realizado com sucesso!",
        });
      } else {
        Toast.error({
          message: `Erro ao logar. Contate o suporte.`,
        });
      }
    } catch (e) {
      Toast.error({
        message: `Erro ao logar. Contate o suporte.`,
      });
    }
    setIsloading(false);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
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
          loading={isLoading}
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
            onClick={() => navigate("/cadastro")}
          >
            Resgistrar
          </Link>
        </Typography>
      </Row>

      <Divider sx={{ color: "var(--border-color)", fontSize: "12px" }}>
        OU
      </Divider>
      <Row flexDirection="column">
        <Box sx={{ my: "16px" }}>
          <ButtonGoogle />
        </Box>
        <ButtonFacebook />
      </Row>
    </form>
  );
}

export default Login;
