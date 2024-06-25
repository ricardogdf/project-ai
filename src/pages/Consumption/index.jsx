import * as React from "react";
import "./index.css";
import { Box } from "@mui/material";
import { Gauge, LineChart } from "@mui/x-charts";
import TickPlacementBars from "./components/TickPlacementBars";

function Consumption() {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <Box>
        <LineChart
          color="#FFF"
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </Box>
      <Box>
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
      <Box>
        <TickPlacementBars />
      </Box>
    </Box>
  );
}

export default Consumption;
