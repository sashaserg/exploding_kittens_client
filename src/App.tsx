import React, { Component } from 'react';
import { GameSocketEmitter } from './api/GameSocketApi';
import { Store, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { iAmHere } from './store/actions/actionCreator';

interface IProps {
  dispatch: Dispatch,
}

class App extends Component<IProps, {}> {
  componentDidMount() {
    GameSocketEmitter.initialization('localhost:3000');
  }

  iAmOnlineHandler = () => {
    this.props.dispatch(iAmHere('test'));
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        App
        <button onClick={this.iAmOnlineHandler}>I am online</button>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   getAllUsers: (playerName: string) => dispatch(iAmHere(playerName))
// });

export default connect()(App);
