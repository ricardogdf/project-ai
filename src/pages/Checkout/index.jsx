import "./index.css";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import StepperCheckout from "./components/StepperCheckout/StepperCheckout";
import RadioButton from "./components/RadioButton/RadioButton";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/Payment/Payment";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  console.log("clientSecret", clientSecret);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post(
        "http://localhost:4242/create-payment-intent",
        JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const plan = { label: "Básico", monthlyValue: 30, annualValue: 24 };

  const [activeStep, setActiveStep] = useState(0);
  const [formOfPayment, setFormOfPayment] = useState("anual");

  return (
    <Box width="70%" height="100vh" display="flex">
      <Box width="70%" p={2}>
        <Button
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
          }}
          size="small"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/financial")}
        >
          Todos os planos
        </Button>
        <Typography py="16px" variant="h5" fontWeight="bold">
          Atualização de plano
        </Typography>
        <StepperCheckout
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        {activeStep === 0 && (
          //Tela ativa => descrição
          <Box>
            <RadioButton
              formOfPayment={formOfPayment}
              setFormOfPayment={setFormOfPayment}
            />

            <Box display="flex" alignItems="center" mt="16px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "var(--terciary-background)",
                }}
              >
                <PeopleOutlineOutlinedIcon fontSize="small" />
              </Box>
              <Box ml="16px">
                <Typography>{`${plan.label} (${formOfPayment})`}</Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle2" fontWeight="bold">
                    {`R$${
                      formOfPayment === "anual"
                        ? plan.annualValue
                        : plan.monthlyValue
                    }`}
                  </Typography>
                  <Typography
                    sx={{ opacity: "0.5" }}
                    variant="caption"
                    ml="4px"
                  >
                    {"/mês"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {activeStep === 1 && (
          //Tela ativa => informações de pagamento
          <TextField
            sx={{
              "&:last-child textarea, &:last-child input": {
                color: "var(--primary-color)",
              },
              "&:last-child fieldset": {
                borderColor: "var(--primary-color)",
                borderRadius: "16px",
              },
            }}
            fullWidth
            name="company"
            type="text"
            onChange={() => console.log("empresa")}
          />
        )}
        {activeStep === 2 && clientSecret && (
          //Tela ativa => pagamento
          <Elements options={options} stripe={stripePromise}>
            <Payment />
          </Elements>
        )}
        <Divider sx={{ mt: "16px", borderColor: "var(--border-color)" }} />
      </Box>
      <Divider
        sx={{ borderColor: "var(--border-color)" }}
        orientation="vertical"
        flexItem
      />
      <Box width="20%" p={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Sumário
        </Typography>
        <Box my={2}>
          <Typography variant="subtitle2">{`${plan.label} (${formOfPayment})`}</Typography>
          <Box
            sx={{ opacity: "0.5" }}
            display="flex"
            justifyContent="space-between"
          >
            {formOfPayment === "anual" ? (
              <>
                <Typography variant="caption">{`R$${plan.annualValue} x 12 meses`}</Typography>
                <Typography variant="caption">{`R$${(
                  plan.annualValue * 12
                ).toFixed(2)}`}</Typography>
              </>
            ) : (
              <>
                <Typography variant="caption">{`R$${plan.monthlyValue}`}</Typography>
                <Typography variant="caption">{`R$${plan.monthlyValue.toFixed(
                  2
                )}`}</Typography>
              </>
            )}
          </Box>
        </Box>
        <Box
          sx={{ opacity: "0.5" }}
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="caption" fontWeight="bold">
            {"Subtotal"}
          </Typography>
          {formOfPayment === "anual" ? (
            <Typography variant="caption" fontWeight="bold">{`R$${(
              plan.annualValue * 12
            ).toFixed(2)}`}</Typography>
          ) : (
            <Typography
              variant="caption"
              fontWeight="bold"
            >{`R$${plan.monthlyValue.toFixed(2)}`}</Typography>
          )}
        </Box>
        <Button
          sx={{ my: "16px", textTransform: "none", fontWeight: "bold" }}
          fullWidth
          size="small"
          variant="contained"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
