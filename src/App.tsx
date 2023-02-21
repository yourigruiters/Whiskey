import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import Root from "./pages/root/Root";
import WhiskeyPage from "./pages/WhiskeyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        path: "/collection",
        element: <CollectionPage />,
      },
      {
        path: "/whiskey/:title",
        element: <WhiskeyPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
