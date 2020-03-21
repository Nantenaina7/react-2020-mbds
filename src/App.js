import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import Navbar from "./components/Navbar";
import Tableau from "./components/Tableau";
import Profil from "./components/Profil";
import Lien from "./components/Lien";
import 'materialize-css/dist/css/materialize.min.css';
import Albums from './components/Albums';
import MembreDetail from './components/membre1';

function App() {
  let nom = "Hello Madagascar";

  return (
    
    <div className="App">
            <Navbar/>

      <React.Fragment>
      {/*<div className="row">
        <div className="col s12">
          <MembreDetail/>
        </div>
  </div>*/}
      <div className="row">
        <div className="col s1">
          <Lien/>
        </div>
        <div className="col s7">
          <Profil />
        </div>
        <div className="col s4">
          <Tableau/>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h4>Albums</h4>
          <Albums/>
        </div>
      </div>

        </React.Fragment>
       
       
        
     

      {/*<BrowserRouter>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/rock">Groupe Rock</Link>
        <Link to="/ui">Test Material UI</Link>
        &nbsp;
        <Link to="/photos">Photos</Link>
        &nbsp;
        <Link to="/username">Username</Link>
        <Route exact path="/" component={ListeHobbies}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        <Route path="/rock" component={GroupeRock} />
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
