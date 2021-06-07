import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation Bar/Navigation';
import { FooterContainer } from './components/Footer/FooterContainer';
import Home from'./pages/Home';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Unix from './pages/project/Unix';
import ShopCUT from './pages/project/ShopCUT';
import TombRaider from './pages/project/TombRaider';
import Dompetku from './pages/project/Dompetku';
import Cerberus from './pages/project/Cerberus';

function App() 
{
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Resume" exact component={Resume} />
        <Route path="/Project" exact component={Project} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Unix" exact component={Unix} />
        <Route path="/ShopCUT" exact component={ShopCUT} />
        <Route path="/TombRaider" exact component={TombRaider} />
        <Route path="/Dompetku" exact component={Dompetku} />
        <Route path="/Cerberus" exact component={Cerberus} />
      </Switch>
      <FooterContainer />
    </Router>
    </>
  );
}

export default App;