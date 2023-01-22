import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage.js';
import Registration from './components/Register.js';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
