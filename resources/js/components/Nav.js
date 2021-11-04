import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/employee/index">Listar </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employee/form">Cadastrar</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}
