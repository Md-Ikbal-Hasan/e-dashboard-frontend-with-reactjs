import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import component
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<h1>Its Products listing component</h1>} ></Route>
          <Route path="/add" element={<h1>Its add Products  component</h1>} ></Route>
          <Route path="/update" element={<h1>Its update Products  component</h1>} ></Route>
          <Route path="/logout" element={<h1>Its logout   component</h1>} ></Route>
          <Route path="/profile" element={<h1>Its profile  component</h1>} ></Route>
          <Route path="/signup" element={<SignUp />} ></Route>
        </Routes>
      </BrowserRouter>


      <Footer />

    </div >
  );
}

export default App;
