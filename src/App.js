import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard, Register, Error } from './pages/index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
