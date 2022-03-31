import logo from "../logo.svg";

function Header() {
    return (
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <img src={logo} width="80px" />
            </li>
            <li className="nav-item" >Pricing</li>
            <li className="nav-item" >About</li>
            <li className="nav-item" >Contact</li>
          </ul>
        </nav>
    );
  }

  export default Header;