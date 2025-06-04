import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function getData(data) {
    props.onDataSave(data);
    // console.log(data.id);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onDataSubmit={getData} />
    </div>
  );
}
export default NewExpense;
