import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from './redux/rocketsReducer';

import Profile from './routes/Profile';

import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import { fetchMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

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
