import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import ComponentA from './components/ComponentA/ComponentA';
import ComponentB from './components/ComponentB/ComponentB';
import ComponentC from './components/ComponentC/ComponentC';
import ComponentD from './components/ComponentD/ComponentD';

interface IReduxProps { 
  apiStatus: 'string';
}

class App extends React.Component<IReduxProps> {
  public render() {
    return (
      <div className="main">
        <h1>Are you Star Wars or Harry Potter fan?</h1>
        <p>See if you know these characters from either of these movies.</p>
        <p>(Checked checkbox means you`d like to check your knowledge in Star Wars saga, unchecked - Harry Potter)</p>
        <ComponentB />
        <ComponentA />
        <ComponentD />
        <ComponentC />
      </div>
    );
  }
}

const mapStateToProps = ( state: any ) => ({
  apiStatus: state.api.apiStatus,
});

export default connect(mapStateToProps)(App);
