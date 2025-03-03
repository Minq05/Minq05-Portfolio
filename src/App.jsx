import { useRoutes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./page/Home";
import Projects from "./page/Project";
import About from "./page/About";
import Contact from "./page/Contact";
import Add from "./page/add-project";
import Edit from "./page/Edit";

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
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
function App() {
  const routes = useRoutes(RoutesConfig);
  return (
    <div className="bg-gray-900">
      <Nav />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
