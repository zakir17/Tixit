import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import TixList from "./components/TixList";
import SearchTerms from "./models/SearchTerms";
import { getTixit } from "./service/getTixitService";

// let searchTerms: SearchTerms = {
//   city: "Detroit",
// };

function App() {
  //   useEffect(() => {
  //     getTixit(searchTerms).then((response) => {
  //       console.log(response);
  //     });
  //   }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events/TixList" element={<TixList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
