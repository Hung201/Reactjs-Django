import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BookDetail from './pages/BookDetail.jsx'

import Cart from './pages/Cart.jsx'
import ProductList from './components/ProductList.jsx'
import { books } from '../data.json'
import { CartProvider } from './components/CartContext.jsx'
import Payment from './pages/Payment.jsx'
import SearchP from './pages/SearchP.jsx'
import SearchResult from './pages/SearchP.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/book/:id",
    element: <BookDetail books={books}/>
  },
  {
    path: "/payment",
    element: <Payment/>
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/pro",
    element: <ProductList books={books} />
  },
  {
    path: "/search",
    element: <SearchP />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
         <RouterProvider router={router} />
     </CartProvider>
     
  </React.StrictMode>,
)

