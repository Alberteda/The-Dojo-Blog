import Navbar from "./Navbar";
import HomePage from "./HomePage";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/create" Component={CreateBlog} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
