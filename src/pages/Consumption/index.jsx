import * as React from "react";
import "./index.css";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import TinyBarChart from "./components/TinyBarChart";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Consumption() {
  return (
    <Box width="70%">
      <Box my="32px" display="flex" justifyContent="space-between">
        <Box
          sx={{ borderRadius: "8px", border: "1px solid var(--border-color)" }}
          display="flex"
          alignItems="center"
        >
          <IconButton aria-label="ativo">
            <KeyboardArrowLeftIcon sx={{ fill: "var(--primary-color)" }} />
          </IconButton>
          Junho
          <IconButton aria-label="ativo">
            <KeyboardArrowRightIcon sx={{ fill: "var(--primary-color)" }} />
          </IconButton>
        </Box>

        <Button variant="contained">Export</Button>
      </Box>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box width="700px">
          <TinyBarChart />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            Consumo do plano
          </Typography>
          <Gauge
            width={150}
            height={150}
            value={102}
            valueMax={120}
            text={({ value, valueMax }) =>
              `${(100 * (value / valueMax)).toFixed(2)}%`
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Consumption;
