import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
    <Auth0Provider
        domain="dev-g-w-km4n.us.auth0.com"
        clientId="iao0wWo4BKcoLQ90vapKlxZBQ2zgCwLg"
        redirectUri={window.location.origin}
        >

    <App />
    </Auth0Provider>

, document.getElementById('root'));



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-fi-yy4q2.us.auth0.com"
//     clientId="nWm0tT3FClWZA36PydEpVsqazrNd7EzW"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );