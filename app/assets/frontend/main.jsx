import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/Index';

import { browserHistory, Router, Route, Link } from 'react-router';

class App extends React.Component{
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render( 
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Index} />
        </Route>
      </Router>
      ,reactNode);
  }
};

$(documentReady);