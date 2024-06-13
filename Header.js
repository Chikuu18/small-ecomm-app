
import { Outlet, Link } from "react-router-dom";
const HeaderComponent = (props) => {
    console.log(props);
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">                   
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        
                        <button className="btn btn-outline-warning" type="button">Apply Dark Theme</button>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
    )
}

export default HeaderComponent;