import Home from './pages/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
