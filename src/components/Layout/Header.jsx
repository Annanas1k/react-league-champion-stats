import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/createContext";

export const Header = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <h2 className="mb-0 text-white">LOL STATS</h2>
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-bold" to="/champions">Champions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-bold" to="/patch-notes">Patch Notes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-bold" to="/universe">Universe</NavLink>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="d-flex align-items-center">
                                <span className="text-riot-gold small me-3 fw-bold">
                                    {user.username.toUpperCase()}
                                </span>
                                <button 
                                    className="btn btn-outline-danger btn-sm fw-bold" 
                                    onClick={logout}
                                >
                                    LOGOUT
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex gap-2">
                                <Link to="/auth/login" className="btn btn-outline-light btn-sm fw-bold">
                                    SIGN IN
                                </Link>
                                <Link to="/auth/register" className="btn btn-danger btn-sm fw-bold">
                                    REGISTER
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};