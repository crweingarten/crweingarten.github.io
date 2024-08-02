import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {path: "/privacy",
    element: <PrivacyPolicy />}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
