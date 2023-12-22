import "./App.css";
import Card from "./Component/Card";

function App() {
  let object = {
    Name: "Supriya",
    Age : 28,
  }
  let newArray = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Telwind Test</h1>
      {/* <Card channel="Aksay" someObject={object} someArray={newArray}></Card> */}
      <Card username="Akshay Umredkar"></Card>
    </>
  );
}

export default App;
