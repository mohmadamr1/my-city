import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sharedlsyout from "./components/Sharedlsyout";
import Ho2me from "./components/Ho2me";

function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Sharedlsyout/>,
      children: [
        {
          path: "/",
          element: < Home />,
        },
        {
          path: "/Ho2me",
          element: < Ho2me/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App
