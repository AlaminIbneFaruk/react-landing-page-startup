import Logo from "/S1.png";
const Navbar = () => {
  const block = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>
          Advertise
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
            alt="expand-arrow--v1"
          />
        </a>
      </li>
      <li>
        <a>
          Supports
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
            alt="expand-arrow--v1"
          />
        </a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li className="ml-4">
        <span className="flex items-center">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png"
            alt="external-search-logistic-delivery-kiranshastry-solid-kiranshastry"
          />
        </span>
      </li>
    </>
  );
  return (
    <div className="bg-[#FFFCF7]">
      <div className="navbar max-w-6xl mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#FFFCF7] rounded-box z-1 mt-3 w-52 p-2 shadow font-dmsans"
            >
              {block}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={Logo} alt="" />
            <span className="font-poppins font-bold">StartupLand</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:min-w-3xl justify-start">
          <ul className="menu menu-horizontal px-1 ">{block}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-ghost">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/unlock.png"
              alt="unlock"
            />
            Login
          </a>
          <a className="btn btn-warning btn-outline bg-amber-100">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
