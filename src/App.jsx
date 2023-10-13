import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sharedlsyout from "./components/Sharedlsyout";
import Botton from "./components/Botton";
import Navbar from "./components/Navbar";



function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Sharedlsyout/>,
      children: [

        {
          path: "/botton",
          element: < Botton />,
        },
        {
          path: "/navbar",
          element: < Navbar />,
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
