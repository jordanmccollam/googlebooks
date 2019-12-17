import React from "react";
import "./Header.css"

function Header() {
    return(
        <div>
            <div className="header-top"></div>
            <h1 className="display-4 font-custom">
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-warning">o</span>
                <span className="text-primary">g</span>
                <span className="text-success">l</span>
                <span className="text-danger">e </span>
                <span className="text-primary">B</span>
                <span className="text-danger">o</span>
                <span className="text-warning">o</span>
                <span className="text-primary">k </span>
                <span className="text-primary">S</span>
                <span className="text-danger">e</span>
                <span className="text-warning">a</span>
                <span className="text-primary">r</span>
                <span className="text-success">c</span>
                <span className="text-danger">h</span>
            </h1>
            <button className="btn btn-primary px-5 mr-2">Search</button>
            <button className="btn btn-outline-primary px-5">Saved</button>
        </div>
    );
}

export default Header;