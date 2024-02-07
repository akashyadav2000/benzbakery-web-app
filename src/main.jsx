import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './components/Store/store.js'


// Lazy-loaded components
const Layout = lazy(() => import('./Layout.jsx'));
const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Login = lazy(() => import('./components/Login/Login.jsx'));
const Signup = lazy(() => import('./components/Signup/Signup.jsx'));
const PastryContainer = lazy(() => import('./components/Pastry/PastryContainer.jsx'));
const Cart = lazy(() => import('./components/Cart/Cart.jsx'));
const CakeContainer = lazy(() => import('./components/Cake/CakeContainer.jsx'));
const CupCakeContainer = lazy(() => import('./components/CupCake/CupCakeContainer.jsx'));
const WeddingCakeContainer = lazy(() => import('./components/WeddingCake/WeddingCakeContainer.jsx'));
const Feedback = lazy(() => import('./components/Feedback/Feedback.jsx'));
const Product = lazy(() => import('./components/Product/Product.jsx'));
//const Cakebuy = lazy(() => import('./components/Cakebuy/Cakebuy.jsx'));

// const router = createBrowserRouter([
//   {
//     path: "/benzbakery-web-app/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/benzbakery-web-app/",
//         element: <Home />,
//       },
//       {
//         path: "/benzbakery-web-app/Product",
//         element: <Product />,
//       },
//       {
//         path: "/benzbakery-web-app/Cake",
//         element: <CakeContainer />,
//       },
//       {
//         path: "/benzbakery-web-app/Pastry",
//         element: <PastryContainer />,
//       },
//       {
//         path: "/benzbakery-web-app/CupCake",
//         element: <CupCakeContainer />,
//       },
//       {
//         path: "/benzbakery-web-app/WeddingCake",
//         element: <WeddingCakeContainer />,
//       },
//       {
//         path: "/benzbakery-web-app/About",
//         element: <About />,
//       },
//       {
//         path: "/benzbakery-web-app/Login",
//         element: <Login />,
//       },
//       {
//         path: "/benzbakery-web-app/Signup",
//         element: <Signup />,
//       },
//       {
//         path: "/benzbakery-web-app/Cart",
//         element: <Cart />,
//       },
//       {
//         path: "/benzbakery-web-app/Feedback",
//         element: <Feedback />,
//       },
//     ],
//   },
// ]);



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/benzbakery-web-app/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Product" element={<Product />} />
      <Route path="Cake" element={<CakeContainer />} />
      <Route path="Pastry" element={<PastryContainer />} />
      <Route path="CupCake" element={<CupCakeContainer />} />
      <Route path="WeddingCake" element={<WeddingCakeContainer />} />
      <Route path="About" element={<About />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Feedback" element={<Feedback />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>,
);
