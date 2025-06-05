import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";
function Expenses(props) {
  const [filteredYear, setYear] = useState("2025");
  // let filteredText = "2022,2023 & 2024";

  // if (filteredYear === "2022") {
  //   filteredText = "2023,2024 & 2025";
  // } else if (filteredYear === "2023") {
  //   filteredText = "2022,2024 & 2025";
  // } else if (filteredYear === "2024") {
  //   filteredText = "2022,2023 & 2025";
  // } else {
  //   filteredText = "2022,2023 & 2024";
  // }

  const filteredChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>

        {/* <p>Data for years {filteredText} is hidden.</p> */}

        {/* {
        filteredExpenses.length === 0 ? (
          <p>No expense Found</p>
        ) : ( */}

        {/* {filteredExpenses.length === 0 && <p>No expense Found</p>}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        <ExpenseList expenses={filteredExpenses}/>

        {/* 
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
}
export default Expenses;
