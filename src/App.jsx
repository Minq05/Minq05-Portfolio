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
import NotFound from "./page/Notfound";
import Login from "./page/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoutesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

function App() {
  const routes = useRoutes(RoutesConfig);
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hiển thị Nav và Footer trừ trang Login */}
      {!isLoginPage && <Nav />}
      {routes}
      {!isLoginPage && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
