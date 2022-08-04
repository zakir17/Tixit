import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import TixList from "./components/TixList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events/tix-list" element={<TixList />} />
          {/* <Route path="/events/details" element={<Details />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
