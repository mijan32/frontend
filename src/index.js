import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Background from './components/Background';
import LoginPage from './page/LoginPage';
import UserInfo from './components/UserInfo';
import clientService from './service/clientService';
import relyingPartyService from './service/relyingPartyService';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login clientService={clientService} />, // Use the 'element' property instead of 'Component'
  },
  {
    path:'home',
    element:<Background/>
  },
  {
    path:'test',
    element:<LoginPage/>
  },
  {
    path:'/userprofile',
    element: <UserInfo relyingPartyService={relyingPartyService}/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
