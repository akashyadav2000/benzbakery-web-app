import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import PastryContainer from './components/Pastry/PastryContainer.jsx'
// import CakebuyContainer from './components/Cakebuy/CakebuyContainer.jsx'
import Cart from './components/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import store from './components/Store/store.js'
import CakeContainer from './components/Cake/CakeContainer.jsx'
import CupCakeContainer from './components/CupCake/CupCakeContainer.jsx'
import WeddingCakeContainer from './components/WeddingCake/WeddingCakeContainer.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
// import Cakebuy from './components/Cakebuy/Cakebuy.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "Cake",
          element: <CakeContainer />
        },
        {
          path: "Pastry",
          element: <PastryContainer />
        },
        {
          path: "CupCake",
          element: <CupCakeContainer />
        },
        {
          path: "WeddingCake",
          element: <WeddingCakeContainer />
        },
        {
          path: "About",
          element: <About />
        },
        {
          path: "Login",
          element: <Login />
        },
        {
          path: "Signup",
          element: <Signup />
        },
        {
          path: "Cart",
          element: <Cart />
        },

        {
          path: "Feedback",
          element: <Feedback />
        },
      ],
    },
  ],

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
