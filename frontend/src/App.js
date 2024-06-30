import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import AddNewEmployee from './routes/AddNewEmployee';
import Statistics from './components/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="addNewEmployee" element={<AddNewEmployee />} />
        <Route path="statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
