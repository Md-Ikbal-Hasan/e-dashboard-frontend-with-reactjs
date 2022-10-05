import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import component
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />

        <Routes>

          <Route element={<PrivateComponent />} >
            <Route path="/" element={<h1>This is Home page</h1>} ></Route>
            <Route path="/add" element={<AddProduct />} ></Route>
            <Route path="/update" element={<h1>Its update Products  component</h1>} ></Route>
            <Route path="/logout" element={<h1>Its logout   component</h1>} ></Route>
            <Route path="/profile" element={<h1>Its profile  component</h1>} ></Route>


          </Route>

          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/login" element={<Login />} ></Route>


        </Routes>
      </BrowserRouter>


      <Footer />

    </div >
  );
}

export default App;
