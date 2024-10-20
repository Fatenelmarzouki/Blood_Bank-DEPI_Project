import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/imgs/logo/logo.png';

export default function Navbar ()
{
    return (
        <>
            <nav className="navbar py-2 navbar-expand-lg text-uppercase fw-bold">
                <div className="container-fluid px-lg-5 px-sm-3 ">
                    <NavLink to='/home' className="navbar-brand bg-trans"> <img src={ logo } alt="Logo" width="90" height="90" className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-3">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link me-3 text-white rounded-2 py-2 px-4" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link me-3 text-white rounded-2 py-2 px-4" aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/team' className="nav-link me-3 text-white rounded-2 py-2 px-4" aria-current="page">Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link me-3 text-white rounded-2 py-2 px-4">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
