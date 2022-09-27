import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from './redux/rocketsReducer';

import Profile from './routes/Profile';

import Header from './components/Header';
import Rockets from './pages/Rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
