import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <div>
      {/* <Header/> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
