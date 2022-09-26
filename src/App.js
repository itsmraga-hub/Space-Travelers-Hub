import { Routes, Route } from 'react-router-dom';

import Profile from './routes/Profile';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="rockets" />
        <Route exact path="missions" />
        <Route exact path="my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
