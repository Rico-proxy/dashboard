

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Balance from './pages/Balance';
import { StyledEngineProvider } from '@mui/material';
function App() {
  return (
    <StyledEngineProvider injectFirst>
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
    </Router>
    </StyledEngineProvider>
  );
}

export default App;