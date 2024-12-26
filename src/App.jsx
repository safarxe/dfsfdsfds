import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Components/Detail/detail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/detail">Detail</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/src/Components/Detail/detail.jsx" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
