import PUBG from './components/PUBG/PUBG';
import Logo from './components/Logo/Logo';
import Fortnite from './components/Fortnite/Fortnite';
import Freefire from './components/Freefire/Freefire';
import Callofduty from './components/Callofduty/Callofduty';
import H1Z1 from './components/H1Z1/H1Z1';
import ARK from './components/ARK/ARK';
import Apex from './components/Apex/Apex';
import Home from './components/Home/Home';


import {Route, Switch } from "react-router"
import { NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    
<div>

{/* start navigation */}
 <div className="nav">
   <ul>
   <li>
     <NavLink activeClassName="active" to="/pubg" exact>PUBG</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="/fortnite">Fortnite</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="/freefire">Freefire</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="/callofduty">Callofduty</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="/H1Z1">H1Z1</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="ARK/">ARK</NavLink>
   </li>
   <li>
     <NavLink activeClassName="active" to="Apex/">Apex</NavLink>
   </li>

      </ul>
      <Logo/>
</div> 

{/* end navigation */}

<Switch>
<Route path="/" component={Home} exact />
      <Route path="/pubg" component={PUBG} />
      <Route path="/fortnite" component={Fortnite} /> 
      <Route path="/freefire" component={Freefire} /> 
      <Route path="/callofduty" component={Callofduty} /> 
      <Route path="/H1Z1" component={H1Z1} />
      <Route path="/ARK" component={ARK} />
      <Route path="/Apex" component={Apex} />
      <Route path="/" render={() => <h1> page not found</h1>} />
      {/* <Ridirect to="/" />  на главную страницу */}
      </Switch>
    </div>
  );
}

export default App;