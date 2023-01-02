import logo from './logo.svg';
import './App.css';
import Images from './components/Images.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route 
              path="/"
              element={<Images/>}
            >
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;