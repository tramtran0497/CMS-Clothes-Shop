import React from "react";
import { ContainerChart } from "./AnalyticsStyles";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineChartProps {}

interface Data {
  name: string;
  sales: number;
  cost: number;
  revenue: number;
}
// Temporary data
const data: Data[] = [
  {
    name: "January",
    sales: 5000,
    cost: 2100,
    revenue: 2900,
  },
  {
    name: "Febuary",
    sales: 6000,
    cost: 3000,
    revenue: 2000,
  },
  {
    name: "March",
    sales: 4900,
    cost: 2900,
    revenue: 2000,
  },
  {
    name: "April",
    sales: 3245,
    cost: 2000,
    revenue: 1245,
  },
  {
    name: "May",
    sales: 4000,
    cost: 1500,
    revenue: 2500,
  },
  {
    name: "June",
    sales: 4700,
    cost: 3000,
    revenue: 1700,
  },
];

export const Chart: React.FC<LineChartProps> = () => {
  return (
    <ContainerChart id="analytics">
      <ResponsiveContainer>
        <LineChart
          width={600}
          height={300}
          data={data}
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
