import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";
import CreateAccount from "./CreateAccount";
import Disqualified from "./Disqualified";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Landing /> }/>
          <Route path="/create-account" element={ <CreateAccount />}/>
          <Route path="/disqualified" element={ <Disqualified />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;