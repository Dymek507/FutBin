import HomeScreen from "./pages/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NewPacks from "./pages/NewPacks";
import MyPlayers from "./pages/MyPlayers";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/new-packs", element: <NewPacks /> },
  { path: "/my-players", element: <MyPlayers /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
