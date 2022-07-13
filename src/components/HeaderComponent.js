import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000/" className="navbar-brand">Ebook Management App</a></div>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/authors" className="nav-link">Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/languages" className="nav-link">Languages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Sign In</Link>
                            </li>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent