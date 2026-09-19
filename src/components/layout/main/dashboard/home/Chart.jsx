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
  console.log(payload);

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
    <div className="w-full h-100">
      <ResponsiveContainer>
        <BarChart width="100%" height="100%" data={summery}>
          <XAxis dataKey="title" />
          <YAxis />
          <Bar dataKey="value" fill="#019d79" />
          <Tooltip
            content={({ payload }) => {
              return <CustomTooltip payload={payload} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
