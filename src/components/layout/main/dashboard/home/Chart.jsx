import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import summery from "../../../../../data/summery";

function Chart() {
  return (
    <div className="w-full h-100">
      <ResponsiveContainer>
        <BarChart width="100%" height="100%" data={summery}>
          <XAxis dataKey="title" />
          <YAxis />
          <Bar dataKey="value" fill="#019d79" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
