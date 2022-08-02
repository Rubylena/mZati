import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Background from './pages/Background';
import Generate from './pages/Generate';
import GetJson from './pages/GetJson';
import Home from './pages/Home';
import PostJson from './pages/PostJson';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/get-started" element={<Background />}/>
          <Route path="/get-started/generate" element={<Generate />}/>
          <Route path="/get-started/post" element={<PostJson/>}/>
          <Route path="/get-started/get" element={<GetJson />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
