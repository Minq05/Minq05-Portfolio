import { useRoutes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./page/Home";
import Projects from "./page/Project";

const RoutesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
function App() {
  const routes = useRoutes(RoutesConfig);
  return (
    <div>
      <Nav />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
