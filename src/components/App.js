import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Weather from './Weather';

const App = ()=>{
    return (
        <Provider store={store}>
            <div>
                <Weather/>
            </div>
        </Provider>
    ) 
}

export default App;
