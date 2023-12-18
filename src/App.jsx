import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="font-barlow">
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
    </div>
  );
};

export default App;
