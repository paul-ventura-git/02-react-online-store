import { createBrowserRouter } from 'react-router-dom';

// Barrel imports 👇
import {
  Layout,
  FormNewProduct,
  ProductDetails,
  FormNewCustomer,
  CustomerDetails,
  FormEditCustomer,
  DeleteCustomer,
  FormEditProduct,
  DeleteProduct,
  ShoppingCart,
  GalleryDetails,
  CheckoutForm
} from '../components';

import {
  Home,
  Products,
  Dashboard,
  Customers,
  Login,
  NotFound,
  Gallery
} from '../pages';

import {
  productsLoader,
  productDetailsLoader,
  customersLoader,
  customerDetailsLoader,
  customerEditLoader,
  deleteCustomerLoader,
  productEditLoader,
  deleteProductLoader,
  galleryLoader,
  galleryDetailsLoader
} from '../services/loaders';

import {
  newProductAction,
  newCustomerAction,
  editCustomerAction,
  deleteCustomerAction,
  editProductAction,
  deleteProductAction
} from '../services/actions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: productsLoader,
        children: [
          { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader},
          { path: '/products/edit-product/:id', element: <FormEditProduct />, loader: productEditLoader, action: editProductAction },
          { path: '/products/delete-product/:id', element: <DeleteProduct />, loader: deleteProductLoader, action: deleteProductAction },
        ],
      },
      {
        path: '/customers',
        element: <Customers />,
        loader: customersLoader,
        children: [
          { path: '/customers/create-customer', element: <FormNewCustomer />, action: newCustomerAction },
          { path: '/customers/:id', element: <CustomerDetails />, loader: customerDetailsLoader},
          { path: '/customers/edit-customer/:id', element: <FormEditCustomer />, loader: customerEditLoader, action: editCustomerAction},
          { path: '/customers/delete-customer/:id', element: <DeleteCustomer />, loader: deleteCustomerLoader, action: deleteCustomerAction },
        ],
      },
      {
        path: '/gallery',
        element: <Gallery />,
        loader: galleryLoader,
        children: [
          { path: '/gallery/:id', element: <GalleryDetails />, loader: galleryDetailsLoader },
        ],
      },
      {
        path: '/cart',
        element: <ShoppingCart />
      },
      {
        path: "/checkout",
        element: <CheckoutForm />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);