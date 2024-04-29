import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { FlexBox } from "../DataDifference/DataDifference";
import { Typography } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
const series1 = [0, 8, 15, 18, 22];
const series2 = [5, 8, 10, 14, 20];
const series3 = [5, 4, 5, 8, 8];

const xLabels = ["item1", "item2", "item3", "item4", "item5"];

const barChartsParams = {
  series: [
    { data: series1, label: "series1" },
    { data: series2, label: "series2" },
    { data: series3, label: "series3" },
  ],
  height: 300,
};
const lineChartsParams = {
  series: [
    { data: [...series1], label: "series1", area: false, stack: "total" },
    { data: [...series2], label: "series2", area: false, stack: "total" },
    { data: [...series3], label: "series3", area: false, stack: "total" },
  ],
  xAxis: [{ data: [1, 2, 3, 4, 5], type: "linear" }],
  height: 300,
};
const pieChartsParams = {
  series: [
    {
      data: [{ value: 5 }, { value: 10 }, { value: 15 }],
      label: "Series 1",
      outerRadius: 80,
      highlighted: { additionalRadius: 10 },
    },
    {
      data: [{ value: 5 }, { value: 10 }, { value: 15 }],
      label: "Series 1",
      innerRadius: 90,
      highlighted: { additionalRadius: 10 },
    },
  ],
  height: 300,
  margin: { top: 50, bottom: 50 },
};

export default function MultiBarChart() {
  const [chartType, setChartType] = React.useState("bar");
  const [withArea, setWithArea] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState("item");
  const [faded, setFaded] = React.useState("global");

  const handleChartType = (newChartType) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      spacing={1}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 2, position: "relative" }}>
        <FlexBox sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              color: "black",
              fontWeight: "300",
              fontSize: "25px",
            }}
          >
            {chartType === "bar"
              ? "Bar chart"
              : chartType === "line"
              ? "Line Chart"
              : chartType === "pie"
              ? "Pie Chart"
              : ""}
          </Typography>
          <Box sx={{ position: "relative", display: "inline" }}>
            {chartType === "bar" ? (
              <InsertChartIcon color="primary"></InsertChartIcon>
            ) : (
              <BarChartOutlinedIcon
                onClick={() => handleChartType("bar")}
              ></BarChartOutlinedIcon>
            )}
            {chartType === "line" ? (
              <TimelineIcon
                sx={{
                  scale: "0.8",
                  borderRadius: "3px",
                  background: "#1976d2",
                  color: "white",
                }}
              ></TimelineIcon>
            ) : (
              <TimelineOutlinedIcon
                onClick={() => handleChartType("line")}
              ></TimelineOutlinedIcon>
            )}
            {chartType === "pie" ? (
              <DonutLargeOutlinedIcon
                sx={{
                  scale: "0.8",
                  borderRadius: "3px",
                  background: "#1976d2",
                  color: "white",
                }}
              ></DonutLargeOutlinedIcon>
            ) : (
              <DonutLargeOutlinedIcon
                onClick={() => handleChartType("pie")}
              ></DonutLargeOutlinedIcon>
            )}
          </Box>
        </FlexBox>
        {chartType === "bar" && (
          <BarChart
            {...barChartsParams}
            series={barChartsParams.series.map((series) => ({
              ...series,
              highlightScope: {
                highlighted,
                faded,
              },
            }))}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            yAxis={[
              { id: "leftAxisId" },
              { id: "middleAxisId" },
              { id: "rightAxisId" },
            ]}
            colors={[
              "rgb(159, 220, 255)",
              "rgb(56, 182, 255)",
              "rgb(68, 72, 154)",
            ]}
            tooltip={{ trigger: "item" }}
          />
        )}

        {chartType === "line" && (
          <LineChart
            {...lineChartsParams}
            series={lineChartsParams.series.map((series) => ({
              ...series,
              area: withArea,
              highlightScope: {
                highlighted,
                faded,
              },
            }))}
          />
        )}

        {chartType === "pie" && (
          <PieChart
            {...pieChartsParams}
            series={pieChartsParams.series.map((series) => ({
              ...series,
              highlightScope: {
                highlighted,
                faded,
              },
            }))}
          />
        )}
      </Box>
    </Stack>
  );
}
