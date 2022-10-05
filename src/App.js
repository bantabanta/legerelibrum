import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

function App() {

  return (
    // <div className="app">
    // </div>
    <Routes>
      <Route
        exact path="/"
        element={<ListBooks />}
      />
      <Route
        path="/search"
        element={<SearchBooks />}
      />
    </Routes>
  )
}

export default App;
