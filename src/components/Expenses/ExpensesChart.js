import Chart from "../Chart/Chart";



function ExpensesChart(props) {
  const dataPoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
  console.log(props.expenses);

  for(const expense of props.expenses) {
    const expenseMounth = expense.date.getMonth();
    dataPoints[expenseMounth].value += expense.amount
  }
  return (
    <div>
        <Chart dataPoints={dataPoints}/>
    </div>
  )
}

export default ExpensesChart;
