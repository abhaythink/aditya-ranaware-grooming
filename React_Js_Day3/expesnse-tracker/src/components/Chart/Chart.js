import React from "react";
import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues=props.dataPoints.map(dp=>dp.value);
    const totalMax=Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
