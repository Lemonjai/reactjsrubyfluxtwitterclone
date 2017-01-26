import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/Index';
import Follow from './component/Follow';

import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';

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
        <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="follow" component={Follow} />
        </Route>
      </Router>
      ,reactNode);
  }
};

$(documentReady);