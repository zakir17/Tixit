import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
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
          <SearchForm />
          <Route path="/" element={<Main />} />
          <Route path="/events/TixList" element={<TixList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
