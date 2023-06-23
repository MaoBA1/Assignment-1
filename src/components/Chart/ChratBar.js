import "./ChartBar.css";

function ChartBar(props) {
  let barHeight = "0%";

  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100);
  }

  console.log(props.lable);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.lable}</div>
    </div>
  );
}

export default ChartBar;
