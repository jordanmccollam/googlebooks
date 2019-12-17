import React from "react";
import "./Search.css";

function Search() {
    return(
        <div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <form>
                            <div className="form-group">
                                <input className="form-control rounded-pill pl-4" type="text" placeholder="How To Kill A Mockingbird" />
                            </div>
                        </form>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-6 text-right">
                        <button className="btn btn-primary px-5">Search</button>
                    </div>
                    <div className="col-6 text-left">
                        <button className="btn btn-light text-primary px-5">Saved</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Search;