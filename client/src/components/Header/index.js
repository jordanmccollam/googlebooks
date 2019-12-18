import React from "react";
import "./style.css"

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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-1 border-bottom border-primary mr-3">
                        <a href="/" className="text-primary">Search</a>
                    </div>
                    <div className="col-1 border-bottom border-success">
                        <a href="/saved" className="text-success">Saved</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;