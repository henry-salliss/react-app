import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "PS5",
      amount: 449.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "FIFA 22",
      amount: 59.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Payment",
      amount: 200,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Dog food",
      amount: 20,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
