import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Routers from './routers/index'
import Reducer from './reducers/index'
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
        // console.log(store)
        return (
            <Provider store={store}>
                <Routers />
            </Provider>
=======
import Home from './screens/home'

class App extends React.Component {
    render() {
        return (
            <Home />
>>>>>>> 8fde18e5cfc18ec436fdd6ea52c78a287dc77471
        );
    }
}

export default App;