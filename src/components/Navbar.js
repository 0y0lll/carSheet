import React from 'react';
import { Link } from 'react-router-dom';
import './FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
    // props.onView()

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <a className="navbar-brand" onClick={() => props.onView('main')}>Navbar</a> */}
            <Link tag="a" to="/" className="navbar-brand">CarSheet</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/cmprResult" className="nav-link">모델비교<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ajaxTest" className="nav-link">테스트<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <div className="d-flex ml-auto align-items-center">
                    <button type="button" className="btn btn-transparent">
                        <FontAwesomeIcon icon="search" />
                    </button>
                    <button type="button" className="btn btn-transparent">
                        <FontAwesomeIcon icon="bell" />
                    </button>
                    <div className="">
                        <button type="button" className="btn btn-transparent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon="user"/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;