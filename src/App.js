import { Routes, Route } from 'react-router-dom';

import Profile from './routes/Profile';

import Header from './components/Header';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/rockets" element={<Rockets />} />
        <Route exact path="missions" />
        <Route exact path="my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
