// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore as reduxCreateStore } from 'redux';
// import rootReducer from '.';

// const createStore = () => reduxCreateStore(rootReducer);

// export default ({ element }) => (
//   <Provider store={createStore()}>{element}</Provider>
// );



import React, { useEffect } from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';
import { Helmet } from 'react-helmet';

const store = createStore(appReducer);


export default ({ element }) => {

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/c556c5e77c.js" crossorigin="anonymous"></script>
            </Helmet>
            <Provider store={store}>{element}</Provider>
        </>
    )
};


