import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
    </>
  );
};

export default App;
