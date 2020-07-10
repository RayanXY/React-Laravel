import React from 'react';
import { Route } from 'react-router-dom';
// Pages
import Login from './components/Login';
import Home from './components/Home';
import Cadastros from './components/Cadastros';

class App extends React.Component {

   render() {
      return ( 
         <div className="bg-blue-200">
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/cadastros" component={Cadastros} />
         </div>
      );
   }

}

export default App;
