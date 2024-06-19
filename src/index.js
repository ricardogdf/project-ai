import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Row from './components/Row';
import Cryptography from './pages/Cryptography';
import Tasks from './pages/Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path='/' 
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/cryptography' 
          element={
            <Layout>
              <Cryptography />
            </Layout>
          }
        />
        <Route
          path='/tasks' 
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        />
        <Route 
          path='/login' 
          element={
            <Row
              style={{ height: "100vh", backgroundColor: "#FFF" }}
              alignItems="center"
              justifyContent="center"
            >
              <Login />
            </Row>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
