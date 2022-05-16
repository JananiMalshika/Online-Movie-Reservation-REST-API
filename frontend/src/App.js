//import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Movies from "./components/Movies";
import BookNow from "./components/BookNow";

function App() {
  return (
          /*<Routes>
                <Header/>
            <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/home" element={<Home/>}/>
          </Routes>*/
      <Router>
          <Routes>
              {/*<Route path='/' exact element={<Login/>}/>*/}
              <Route path='/home' exact element={<Home/>}/>
              <Route path='/movies' exact element={<Movies/>}/>
              <Route path='/login' exact element={<Login/>}/>
              <Route path='/buyTickets' exact element={<BookNow/>}/>
          </Routes>
      </Router>

  );
}

export default App;
