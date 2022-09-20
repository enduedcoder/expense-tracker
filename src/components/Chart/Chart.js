import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valuefromDataPoint = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );

  const maxValuedata = Math.max(...valuefromDataPoint);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValuedata}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
