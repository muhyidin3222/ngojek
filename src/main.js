import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Routers from './routers/index'
import Reducer from './reducers'
import { createLogger } from 'redux-logger'

const log = createLogger({ diff: true, collapsed: true });
const enhancers = [];
const middleware = [thunk, log];

const store = createStore(
    Reducer,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routers />
            </Provider>
        );
    }
}

export default App;