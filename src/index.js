import React from 'react';
// import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import App from './App/App';
import './index.css'
import './i18n';
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

