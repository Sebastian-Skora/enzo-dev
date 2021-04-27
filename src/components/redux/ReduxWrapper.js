// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore as reduxCreateStore } from 'redux';
// import rootReducer from '.';

// const createStore = () => reduxCreateStore(rootReducer);

// export default ({ element }) => (
//   <Provider store={createStore()}>{element}</Provider>
// );



import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';

const store = createStore(appReducer);


export default ({ element }) => (
    <>
        <App />
        <Provider store={store}>{element}</Provider>
    </>
);


