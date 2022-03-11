import React from "react";
import { ContainerChart, TitleChart } from "./AnalyticsStyles";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {chartLineData} from "../../temporaryData"

interface LineChartProps {}

export const Chart: React.FC<LineChartProps> = () => {
  return (
    <ContainerChart id="analytics">
      <TitleChart>Analytics</TitleChart>
      <ResponsiveContainer>
        <LineChart
          width={600}
          height={300}
          data={chartLineData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          <Line type="monotone" dataKey="cost" stroke="#f9c74f" />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ContainerChart>
  );
};
