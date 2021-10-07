import "./chart.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import { userData } from "../../dummyData";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  
  const data = [
    { name: "January", uv: 226 },
    { name: "February", uv: 357 },
    { name: "March", uv: 369 },
    { name: "April", uv: 391 },
    { name: "May", uv: 439 },
    { name: "June", uv: 490 },
    { name: "July", uv: 530 },
    { name: "August", uv: 535 },
    { name: "September", uv: 640 },
    { name: "Octomber", uv: 870 },
    { name: "November" },
    { name: "December" },
  ];
    const teacherdata = [
      { name: "January", uv: 16 },
      { name: "February", uv: 17 },
      { name: "March", uv: 23 },
      { name: "April", uv: 29 },
      { name: "May", uv: 29 },
      { name: "June", uv: 30 },
      { name: "July", uv: 30 },
      { name: "August", uv: 35 },
      { name: "September", uv: 35 },
      { name: "Octomber", uv: 36 },
      { name: "November" },
      { name: "December" },
    ];

  return (
    <div style={{ width: "100%" }}>
      <br />
      <br />
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <span className="featuredTitle1">Registerd Students</span>
      <br />
      <br />
      <br />
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={teacherdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <span className="featuredTitle1">Registerd Teachers</span>
    </div>
  );
}
