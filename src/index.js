import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoxCon from './container/box-container';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './reducer/index';
import thunk from 'redux-thunk';

let store = createStore(mainReducer, applyMiddleware(thunk));

class App extends React.Component {
    render(){
        return (
            <div>
                <h4>Click to change color randomly</h4>
                <BoxCon />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
