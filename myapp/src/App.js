import './App.css';
import Registration from './components/Register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/registration' element={<Registration />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
