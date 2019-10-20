import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';

const Home = () => {
  return <h1>Home</h1>;
};

const Generos = () => {
  return <h1>Generos</h1>;
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/generos" component={Generos} />
      </div>
    </Router>
  );
}

export default App;
