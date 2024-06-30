import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Main />} />
          <Route path="blogs" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
