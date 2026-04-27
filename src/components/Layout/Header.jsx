import { Link , NavLink } from "react-router"


export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
        <div className="container">
            {/* Logo-ul Riot/LoL */}
            <Link className="navbar-brand fw-bold" to="/">
            <h2>LOL STATS</h2>
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
                <span className="text-secondary small me-3">I B1gSm0ke I</span>
                <button className="btn btn-outline-light btn-sm">SIGN IN</button>
            </div>
            </div>
        </div>
        </nav>
    )
}