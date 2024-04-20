

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { StyledEngineProvider } from '@mui/material';
import Transaction from './pages/Transaction';
import Balance from './pages/Balance';
import Profile from './pages/Profile';
import Support from './pages/Support';
function App() {
  return (
    <StyledEngineProvider injectFirst>
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Routes>
    </Router>
    </StyledEngineProvider>
  );
}

export default App;