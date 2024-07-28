import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import MapPage from './pages/mappage';
import TicketPage from './pages/ticketpage';

function App() {
  return (
    <Router>
      {/* <Link to='/mappage'>Map</Link>
      <Link to='/ticketpage'>Ticket</Link> */}
      <Routes>
        <Route index element={< MapPage />} />
        <Route path="/mappage" element={< MapPage />} />
        <Route path="/ticketpage" element={< TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
