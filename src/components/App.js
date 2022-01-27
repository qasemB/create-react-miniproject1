import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mystore from './MyStore';

const App = ()=>{
    return (
        <Provider store={store}>
            <div>
                <Mystore/>
            </div>
        </Provider>
    ) 
}

export default App;
