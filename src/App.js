import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />} />
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
