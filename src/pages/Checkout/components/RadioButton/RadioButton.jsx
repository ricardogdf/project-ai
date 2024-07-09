import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Typography } from "@mui/material";

export default function RadioButton({ formOfPayment, setFormOfPayment }) {
  const handleChange = (event) => {
    setFormOfPayment(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>
        <Typography variant="subtitle1" fontWeight="bold">
          Plano
        </Typography>
      </FormLabel>
      <RadioGroup row value={formOfPayment} onChange={handleChange}>
        <FormControlLabel
          value="anual"
          control={<Radio size="small" />}
          label={
            <Box display="flex">
              <Typography fontSize="14px" fontWeight="bold">
                Anual
              </Typography>
              <Typography
                sx={{ color: "rgb(107, 221, 154)!important", ml: "4px" }}
                variant="caption"
              >
                (25% de desconto)
              </Typography>
            </Box>
          }
        />
        <FormControlLabel
          value="mensal"
          control={<Radio size="small" />}
          label={
            <Typography fontSize="14px" fontWeight="bold">
              Mensal
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
