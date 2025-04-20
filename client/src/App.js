import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWithDiscord from './LoginWithDiscord';
import Callback from './Callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWithDiscord />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
