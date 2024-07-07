import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3" style={{
            width: "280px",
            height: "100vh",
            position: "fixed",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" style={{
                alignItems: "center",
            }}>
                <img src="mall.jpg" alt="Logo" /> {/* Replace with your logo */}
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Dashboard
                    </Link>
                </li>
                <li >
                    <Link to="/marketplace" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Market Place
                    </Link>
                </li>
                <li >
                    <Link to="/register" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Register Property
                    </Link>
                </li>
            </ul>
            {/* <hr/>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
        </div>
    );
}

export default SideBar;
