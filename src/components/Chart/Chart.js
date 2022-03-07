import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxVal = Math.max(...props.dataPoints.map((item) => item.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            label={dataPoint.label}
            key={dataPoint.label}
            max={maxVal}
          />
        );
      })}
    </div>
  );
};

export default Chart;
