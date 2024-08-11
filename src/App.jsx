import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Navbar from './components/Navbar';
import NavBtn from './components/NavBtn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

const MainPage = () => (
  <div className="flex flex-col items-center">
    <div className="flex justify-between p-2 items-center gap-5">
      <NavBtn dir={"<"} />
      <Card />
      <NavBtn dir={">"} />
    </div>
  </div>
);

export default App;
