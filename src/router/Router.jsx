import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetails from "../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'product-details/:id',
    element: <ProductDetails />
  },
]);

export default router;