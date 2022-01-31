import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Error, Landing } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/register' element={<Register />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
