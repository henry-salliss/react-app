import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartData = [
    { label: "Jan", value: 0, id: Math.random() },
    { label: "Feb", value: 0, id: Math.random() },
    { label: "Mar", value: 0, id: Math.random() },
    { label: "Apr", value: 0, id: Math.random() },
    { label: "May", value: 0, id: Math.random() },
    { label: "Jun", value: 0, id: Math.random() },
    { label: "Jul", value: 0, id: Math.random() },
    { label: "Aug", value: 0, id: Math.random() },
    { label: "Sep", value: 0, id: Math.random() },
    { label: "Oct", value: 0, id: Math.random() },
    { label: "Nov", value: 0, id: Math.random() },
    { label: "Dec", value: 0, id: Math.random() },
  ];

  props.expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    console.log(expenseMonth);
    chartData[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartData} />;
};

export default ExpensesChart;
