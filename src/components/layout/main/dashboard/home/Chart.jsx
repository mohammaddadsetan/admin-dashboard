import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import summery from "../../../../../data/summery";

const CustomTooltip = ({ payload }) => {
  return (
    <div className="custom-tooltip bg-white p-2 rounded shadow-md">
      <p className="label">
        {payload[0]?.payload?.title}: {payload[0]?.payload?.value}
      </p>
    </div>
  );
};

function Chart() {
  return (
    <div className="p-5 space-y-10 bg-white border rounded-xl primary-border-color">
      <p className="text-lg">آمار کلی داشبورد</p>

      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={summery} width={150} height={40}>
            <Bar dataKey="value" fill="#019d79" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
