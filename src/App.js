import React from "react";
import { AuthContext } from "./context/Auth";
import Home from "./pages/Home/Home";
import PublicLanding from "./pages/PublicLanding/PublicLanding";
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.scss'

const App = () => {
  const authState = React.useContext(AuthContext)

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
            <p className="text">Finder</p>
          </div>
          <NavBar />
        </header>
        {authState.profile ? <Home/> : <PublicLanding/>}
      </div>
    </BrowserRouter>
  );
};

export default App;
