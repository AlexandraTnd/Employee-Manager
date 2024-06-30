import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import AddNewEmployee from './routes/AddNewEmployee';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="addNewEmployee" element={<AddNewEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
