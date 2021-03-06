import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import appStore from './redux/appStore'
import {userChangedWatch} from "./firebase/whatchers/userWatch"
import "./index.css"

userChangedWatch()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={appStore} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
