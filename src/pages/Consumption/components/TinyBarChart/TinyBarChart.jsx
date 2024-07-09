import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset } from "./dataset/weather";

const chartSetting = {
  series: [{ dataKey: "tokens", label: "Tokens utilizados" }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function TinyBarChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "day",
          tickPlacement: "middle",
          tickLabelPlacement: "middle",
        },
      ]}
      {...chartSetting}
    />
  );
}
