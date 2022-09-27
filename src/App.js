import { Routes, Route } from 'react-router-dom';

import Profile from './routes/Profile';

import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/rockets" element={<Rockets />} />
        <Route exact path="missions" element={<Missions />} />
        <Route exact path="my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
