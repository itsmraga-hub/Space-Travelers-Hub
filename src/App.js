import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
