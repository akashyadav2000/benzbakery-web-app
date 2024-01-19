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
import Cart from './components/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import store from './components/Store/store.js'
import CakeContainer from './components/Cake/CakeContainer.jsx'
import CupCakeContainer from './components/CupCake/CupCakeContainer.jsx'
import WeddingCakeContainer from './components/WeddingCake/WeddingCakeContainer.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Product from './components/Product/Product.jsx'
// import Cakebuy from './components/Cakebuy/Cakebuy.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/benzbakery-web-app/",
      element: <Layout />,
      children: [
        {
          path: "/benzbakery-web-app/",
          element: <Home />
        },

        {
          path: "/benzbakery-web-app/Product",
          element: <Product />
        },

        {
          path: "/benzbakery-web-app/Cake",
          element: <CakeContainer />
        },
        {
          path: "/benzbakery-web-app/Pastry",
          element: <PastryContainer />
        },
        {
          path: "/benzbakery-web-app/CupCake",
          element: <CupCakeContainer />
        },
        {
          path: "/benzbakery-web-app/WeddingCake",
          element: <WeddingCakeContainer />
        },
        {
          path: "/benzbakery-web-app/About",
          element: <About />
        },
        {
          path: "/benzbakery-web-app/Login",
          element: <Login />
        },
        {
          path: "/benzbakery-web-app/Signup",
          element: <Signup />
        },
        {
          path: "/benzbakery-web-app/Cart",
          element: <Cart />
        },

        {
          path: "/benzbakery-web-app/Feedback",
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
