import Home from './Home/Home';
import GiphyMode from './GiphyMode/GiphyMode';
import TenorMode from './TenorMode/TenorMode';
import '../App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/GiphyMode" element={<GiphyMode/>}/>
        <Route exact path="/TenorMode" element={<TenorMode/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
