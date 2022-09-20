import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/Layout/About";
import NotFound from "./Components/Layout/NotFound";
import NavigationBar from "./Components/Layout/Header/NavigationBar";
import Duration from './Components/Duration';

function App() {
  return (
 
      <BrowserRouter>
         <NavigationBar />
          <main>
              <Routes>
                  <Route path="/" element={<About/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path="/duration" element={<Duration />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;