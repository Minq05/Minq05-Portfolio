import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden">
          Khi truy cập sẽ mất vài phút để tải dữ liệu ! 
        </div>
      </div>
      <ul className="flex space-x-6 mr-6">
        <li>
          <Link
            to="/"
            className="hover:text-blue-400 hover:font-extrabold font-serif"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-blue-400 hover:font-extrabold font-serif"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-400 hover:font-extrabold font-serif"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-blue-400 hover:font-extrabold font-serif"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
