import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img src="src/img/logo.png" alt="Hình" className="w-20 h-20 my-2" />
        </div>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
