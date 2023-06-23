import './Chart.css';
import ChartBar from './ChratBar';



function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataPointsValues);

    return (  
        <div className='chart'>
            {
                props.dataPoints.map(dataPoint => 
                    <ChartBar
                        key={dataPoint.lable}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        lable={dataPoint.lable}
                    />
                )
            }
        </div>
    );
}

export default Chart;