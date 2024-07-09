import React from "react";
import "./index.css";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import Row from "../../components/Row/Row.jsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Profile() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const validationSchema = object({
    name: string().required("Requerido"),
    surname: string().required("Requerido"),
    email: string().email("Email inválido").required("Requerido"),
    password: string().required("Requerido"),
  });

  const formik = useFormik({
    initialValues: { name: "", surname: "", email: "", password: "" },
    onSubmit: (values) => {
      //handleSubmit(values);
    },
    validationSchema,
  });

  return (
    <form style={{ width: "320px" }} onSubmit={formik.handleSubmit}>
      <Toaster />
      <Box my={4}>
        <TextField
          disabled
          sx={{ height: "52px" }}
          fullWidth
          name="name"
          label={"Nome"}
          type={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Box>
      <Box mb={4}>
        <TextField
          disabled
          sx={{ height: "52px" }}
          fullWidth
          name="surname"
          label={"Sobrenome"}
          type={"surname"}
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && !!formik.errors.surname}
          helperText={formik.touched.surname && formik.errors.surname}
        />
      </Box>
      <Box mb={4}>
        <TextField
          disabled
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
          disabled
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

      <Row gap={2} alignItems="center" justifyContent="center">
        <Button
          sx={{ height: "52px" }}
          fullWidth
          variant="outlined"
          onClick={() => navigate("/")}
        >
          {"Voltar"}
        </Button>
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
      </Row>
    </form>
  );
}

export default Profile;
