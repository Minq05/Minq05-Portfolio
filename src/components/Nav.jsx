import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden">
          <Link to="/">
            <img
              src="https://s3-alpha-sig.figma.com/img/6c97/ed47/76b8c84d7f330ed6b4d524c5013d50f1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X52fezzW6ji~1DUtYxwV0rAUxakZxz~iYtSSWRSVqpCAJbvu--7Tol7ioWQfGg6R4uLbe5IqctXxlh4QranRu6OeNXxsCiEex8Ms5sMx0XV-v-~fUZOQmyA72ZML4IVaiMV56vMX08Pg5z2W5TysCsL9YlNVPgUi04xR1my2HTmrKedahqakoO0AyEv59BetfKm3TE95cXv3237u70DZP-L~oiV8tZmS5aG6olY8v88O5YXkZzaGD5mqCxAvqBaYrl9~vtJctR04mpA9JZh4kaNROp9EMv~BnNpOplKMlPohKuLMmZdaz6k6O4lR-7N6F9mVrBlwoq3M0SGpOpmBVw__"
              className="w-20 h-20 object-cover"
            />
          </Link>
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
