import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <div className="gap-4 flex">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/my-skills">
          <a>My Skills</a>
        </Link>

        <Link to="/about">
          <a>My journey</a>
        </Link>
        
        <Link to="/my-projects">
          <a>My Projects</a>  
        </Link>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lobster">Raihana Ferdousi</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
