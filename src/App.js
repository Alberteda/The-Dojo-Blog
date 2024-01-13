import Navbar from "./Navbar";
import HomePage from "./HomePage";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
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
            <Route path="/blogs/:id" Component={BlogDetails}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
