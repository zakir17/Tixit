import { useEffect } from "react";
import "./App.css";
import { getTixit } from "./service/getTixit";

function App() {
  useEffect(() => {
    getTixit({ city: "Detroit", keyword: "Tigers" }).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
