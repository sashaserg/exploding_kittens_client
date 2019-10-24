import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import App from '../../App'
import { Store } from 'redux';

interface IState {
    store: Store,
}

class Setup extends Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            store: configureStore()
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        );
    }
}
export default Setup;