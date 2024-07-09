import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

const BoxPlans = ({
  title,
  price,
  description,
  advantage,
  signature = true,
  activePlan,
  frequency,
}) => {
  const navigate = useNavigate();

  const navigateToPayment = () => {
    if (!activePlan) {
      navigate("/checkout");
    }
  };
  return (
    <Box
      width="250px"
      height="400px"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        border: "1px solid var(--border-color)",
        borderRadius: "16px",
        backgroundColor: "var(--secondary-background)",
      }}
    >
      <Typography fontWeight="bold" variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box my="8px" display="flex" alignItems="center">
        <Typography fontWeight="bold" variant="h5" gutterBottom>
          R$
        </Typography>
        <Typography mx="8px" fontWeight="bold" variant="h5" gutterBottom>
          {price}
        </Typography>
        <Typography
          sx={{ opacity: "0.7", fontSize: "11px" }}
          variant="caption"
          gutterBottom
        >
          {signature ? `Por mês - ${frequency}` : ""}
        </Typography>
      </Box>
      <Button
        variant={activePlan ? "outlined" : "contained"}
        onClick={() => navigateToPayment()}
      >
        {activePlan ? "Plano atual" : "Selecionar plano"}
      </Button>
      <Typography
        sx={{ height: "50px", my: "20px", opacity: "0.7", fontSize: "11px" }}
        variant="caption"
        gutterBottom
      >
        {description}
      </Typography>

      <Typography fontWeight="bold" variant="caption" gutterBottom>
        Pontos inclusos
      </Typography>
      {advantage?.map((a) => (
        <Box height="30px" display="flex" alignItems="center">
          <CheckIcon sx={{ mr: "8px" }} fontSize="1em" />
          <Typography
            sx={{ my: "16px", opacity: "0.7", fontSize: "11px" }}
            variant="caption"
            gutterBottom
          >
            {a}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default BoxPlans;
