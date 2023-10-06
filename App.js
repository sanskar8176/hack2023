import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expense = [
    {
      title: 'car service',
      amount: 9223.32,
      date: new Date(2023, 7, 12)
    },
    {
      title: 'mobile',
      amount: 12000.32,
      date: new Date(2020, 6, 12)
    },
    {
      title: 'milkman',
      amount: 2000,
      date: new Date(2020, 2, 4)
    },
    {
      title: 'usb',
      amount: 500,
      date: new Date(2022, 7, 12)
    },
  ]


  return (
    <div >
      <h2>This is React Project</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}>
      </ExpenseItem>

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}>
      </ExpenseItem>

      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}>
      </ExpenseItem>

      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}>
      </ExpenseItem>




    </div>
  );
}

export default App;
