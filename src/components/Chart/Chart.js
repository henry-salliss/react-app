import React from "react";
import "./Chart.css";
import Bar from "./Bar";

const Chart = (props) => {
  const values = props.dataPoints.map((point) => {
    return point.value;
  });
  const maximum = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <Bar
            key={dataPoint.id}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
