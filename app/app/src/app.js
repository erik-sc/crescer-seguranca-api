import "./app.css"
import { RouterProvider } from "react-router";
import { GlobalUserProvider } from "./context/user/user.context";
import { router } from "./router";

function App() {

  return (
    <GlobalUserProvider>
      <RouterProvider router={router} />
    </GlobalUserProvider>
  );
}

export default App;
