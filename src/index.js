import React  from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Row from './components/Row';
import Cryptography from './pages/Cryptography';
import Tasks from './pages/Tasks';
import SingUp from './pages/SignUp';
import Toast from './components/Toast';
import Consumption from './pages/Consumption';
import { AuthProvider, useAuth } from './context/authContect';
import PrivateRoute from './routes/PrivateRoute';
import OpenRoute from './routes/OpenRoute';

function InvalidUrl() {
  const { isAuthenticated } = useAuth();

  if(isAuthenticated){
    Toast.error({
      message: `URL inválida. Redirecionando para a home.`,
    });
    return <Navigate to="/home" />
  }else{
    Toast.error({
      message: `URL inválida ou pendente de login. Redirecionando para a login.`,
    });
    return <Navigate to="/" />
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<OpenRoute />}>
            <Route 
              path='/' 
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
          </Route>

          <Route path='/cadastro' element={<OpenRoute />}>
            <Route 
              path='/cadastro' 
              element={
                <Row
                  style={{ height: "100vh", backgroundColor: "#FFF" }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <SingUp />
                </Row>
              } 
            />
          </Route>
 
          <Route path='/home' element={<PrivateRoute />}>
            <Route path='/home' element={<Layout> <Home /> </Layout>} />
          </Route>

          <Route path='/cryptography' element={<PrivateRoute />}>
            <Route path='/cryptography' element={<Layout> <Cryptography /> </Layout>} />
          </Route>

          <Route path='/tasks' element={<PrivateRoute />}>
            <Route path='/tasks' element={<Layout> <Tasks /> </Layout>} />
          </Route>

          <Route path='/consumption' element={<PrivateRoute />}>
            <Route path='/consumption' element={<Layout> <Consumption /> </Layout>} />
          </Route>

          <Route path="*" element={<InvalidUrl/>}/>
        </Routes>
      </Router>
    </AuthProvider>
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
