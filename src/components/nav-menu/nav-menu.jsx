import { Link } from "react-router-dom";
import { useUser } from "../../pages/UserContext"; // не забудь імпорт!
const NavMenu = () => {
  const user = useUser();
    return (
    <header>
        <nav>
          <Link to="/" id="href-logo">
            <img src="../public/img/volunteer logo.png" alt="logo" id="logo" />
          </Link>
          <ul>
            <li><Link to="/my" className="nav">My initiatives</Link></li>
            <li><Link to="/available" className="nav">Available initiatives</Link></li>
            <li><Link to="/about" className="nav">About us</Link></li>
            
            {user ? (
          <li>
                <Link to="/account" className="reg">
                <img src="../public/img/user.png" alt="user" id="user-logo" />
                </Link>
          </li>
        ) : (
          <>
            <li><Link to="/register" className="reg">Sign Up</Link></li>
            <li><Link to="/login" className="reg">Sign In</Link></li>
          </>
        )}
          </ul>
        </nav>
    </header>
    )
}
export default NavMenu;