import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Alert } from "./components/Alert";
import { AppContextProvider } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProfile } from "./pages/UserProfile/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:user",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
    <Alert />
  </>
);
